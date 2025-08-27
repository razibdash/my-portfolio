import { createContext, useContext, useReducer, useEffect } from "react";

// Create context
export const DataContext = createContext();

// Initial state
const initialState = {
  skills: [],

  blogs: [],
};

// Reducer to update state
function dataReducer(state, action) {
  switch (action.type) {
    case "SET_SKILLS":
      return { ...state, skills: action.payload };

    case "SET_BLOGS":
      return { ...state, blogs: action.payload };
    default:
      return state;
  }
}

// Provider component
export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  // Example: fetch data from backend on mount
  useEffect(() => {
    async function fetchData() {
      try {
        const skillsRes = await fetch(
          "http://localhost:5000/api/skills/skill/public"
        );
        const skillsData = await skillsRes.json();
        dispatch({ type: "SET_SKILLS", payload: skillsData });

        const blogsRes = await fetch("http://localhost:5000/api/blogs");
        const blogsData = await blogsRes.json();
        dispatch({ type: "SET_BLOGS", payload: blogsData });
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

// // Custom hook for easy usage
// export function useData() {
//   return useContext(DataContext);
// }
