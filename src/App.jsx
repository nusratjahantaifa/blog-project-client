import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { loading } = useContext(AuthContext);

  // ✅ Global loading (auth checking)
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-base-200">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      
      {/* Scroll Fix */}
      <ScrollToTop />

      {/* ✅ Navbar (sticky) */}
      <div className="sticky top-0 z-50 shadow-md">
        <Navbar />
      </div>

      {/* ✅ Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-6">
        <Outlet />
      </main>

      {/* ✅ Footer */}
      <Footer />

      {/* ✅ Toast Notifications */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;