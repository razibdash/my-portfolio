import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AdminAuthContext } from "./AdminAuthContext"; // <-- import your admin auth

export const SkillContext = createContext();

export const SkillProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);
  const { admin } = useContext(AdminAuthContext); // ✅ get token from auth context
  const token = admin?.token; // assuming admin object has a token property
  // Fetch Skills
  const fetchSkills = async () => {
    try {
      const res = await axios.get(
        "https://my-portfolio-pyar.onrender.com/api/skills/skill",
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ pass token
          },
        }
      );
      setSkills(res.data);
    } catch (err) {
      console.error("Error fetching skills:", err);
    }
  };

  // Add Skill
  const addSkill = async (skillData) => {
    try {
      await axios.post(
        "https://my-portfolio-pyar.onrender.com/api/skills/skill",
        skillData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ pass token
          },
        }
      );
      fetchSkills();
    } catch (err) {
      console.error("Error adding skill:", err);
    }
  };

  // Update Skill
  const updateSkill = async (id, skillData) => {
    try {
      await axios.put(
        `https://my-portfolio-pyar.onrender.com/api/skills/skill/${id}`,
        skillData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ pass token
          },
        }
      );
      fetchSkills();
    } catch (err) {
      console.error("Error updating skill:", err);
    }
  };

  // Delete Skill
  const deleteSkill = async (id) => {
    try {
      await axios.delete(
        `https://my-portfolio-pyar.onrender.com/api/skills/skill/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ pass token
          },
        }
      );
      fetchSkills();
    } catch (err) {
      console.error("Error deleting skill:", err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchSkills();
    }
  }, [token]);

  return (
    <SkillContext.Provider
      value={{
        skills,
        setSkills,
        addSkill,
        updateSkill,
        deleteSkill,
        fetchSkills,
      }}
    >
      {children}
    </SkillContext.Provider>
  );
};
