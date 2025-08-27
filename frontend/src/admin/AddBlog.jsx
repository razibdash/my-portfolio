import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useBlog } from "../hook/allData";
import toast from "react-hot-toast";
export default function AddBlog() {
  const {
    blogs,
    fetchBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
    loading,
    error,
  } = useBlog();
  useEffect(() => {
    fetchBlogs();
  }, []);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    author: "",
    date: "",
    description: "",
  });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAddOrEdit = async (e) => {
    e.preventDefault();

    if (
      !formData.image ||
      !formData.title ||
      !formData.author ||
      !formData.date ||
      !formData.description
    )
      return;

    try {
      if (editId) {
        await updateBlog(editId, formData);
        toast.success("Blog updated successfully ✅");
        setEditId(null);
      } else {
        await createBlog(formData);
        toast.success("Blog created successfully 🎉");
      }

      setFormData({
        image: "",
        title: "",
        author: "",
        date: "",
        description: "",
      });
    } catch (err) {
      toast.error("Something went wrong ❌");
    }

    setFormData({
      image: "",
      title: "",
      author: "",
      date: "",
      description: "",
    });
  };

  const handleEdit = (blog) => {
    setFormData({
      image: blog.image,
      title: blog.title,
      author: blog.author,
      date: blog.date,
      description: blog.description,
    });
    setEditId(blog._id); // 👈 using DB _id now
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      try {
        await deleteBlog(id);
        toast.success("Blog deleted successfully 🗑️");
      } catch {
        toast.error("Failed to delete blog ❌");
      }
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-indigo-800 mb-8">Manage Blogs</h2>

      {/* Form */}
      <form
        onSubmit={handleAddOrEdit}
        className="flex flex-col md:flex-row gap-4 mb-10 items-center flex-wrap"
      >
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Blog Image URL"
          className="p-3 rounded-lg flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Blog Title"
          className="p-3 rounded-lg flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          className="p-3 rounded-lg flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="p-3 rounded-lg flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Short Description"
          className="p-3 rounded-lg flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-semibold transition"
        >
          {editId ? "Update Blog" : "Add Blog"}
        </button>
      </form>

      {/* Blogs Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-700 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Image
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Author
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Description
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blogs.map((blog) => (
              <motion.tr
                key={blog._id}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer transition"
              >
                <td className="px-6 py-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-16 h-16 object-contain"
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-700">
                  {blog.title}
                </td>
                <td className="px-6 py-4 text-gray-500">{blog.author}</td>
                <td className="px-6 py-4 text-gray-500">{blog.date}</td>
                <td className="px-6 py-4 text-gray-500">{blog.description}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                  >
                    Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
