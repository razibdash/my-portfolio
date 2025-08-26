import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/index.jsx";
import AppRouter from "./router";
import Footer from "./components/footer/index.jsx";
import { DataProvider } from "./context/DataContext";
export default function App() {
  return (
    <DataProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-black text-white">
          {/* Navbar */}
          <Navbar />

          {/* Routing */}
          <main className="flex-1">
            <AppRouter />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
}
