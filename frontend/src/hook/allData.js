import { useContext } from "react";
import { DataProvider } from "../context/DataContext";
// Custom hook for easy usage
export default function useData() {
  return useContext(DataProvider);
}