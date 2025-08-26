import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/index.jsx";
import AppRouter from "./router";
import Footer from "./components/footer/index.jsx";
import { DataProvider } from "./context/DataContext";

function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith("/admin"); // hide navbar/footer for admin

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Navbar */}
      {!hideLayout && <Navbar />}

      {/* Routing */}
      <main className="flex-1">
        <AppRouter />
      </main>

      {/* Footer */}
      {!hideLayout && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <DataProvider>
      <Router>
        <Layout />
      </Router>
    </DataProvider>
  );
}
