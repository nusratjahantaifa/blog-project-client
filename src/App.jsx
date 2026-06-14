import { useState, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { loading } = useContext(AuthContext);

  // ✅ Dark mode state
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // ✅ Apply class to <html>
  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-base-200">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-base-200 dark:bg-gray-900 dark:text-white">
      
      <ScrollToTop />
<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* ✅ Pass toggle to Navbar */}
      <div className="sticky top-0 z-50 shadow-md">
       
      </div>

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-6">
        <Outlet />
      </main>

      <Footer />

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;

// import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import ScrollToTop from "./components/ScrollToTop";
// import Footer from "./components/Footer";
// import { Toaster } from "react-hot-toast";
// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";

// function App() {
//   const { loading } = useContext(AuthContext);

//   // ✅ Global loading (auth checking)
//   if (loading) {
//     return (
//       <div className="h-screen flex items-center justify-center bg-base-200">
//         <span className="loading loading-spinner loading-lg text-primary"></span>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col min-h-screen bg-base-200">
      
//       {/* Scroll Fix */}
//       <ScrollToTop />

//       {/* ✅ Navbar (sticky) */}
//       <div className="sticky top-0 z-50 shadow-md">
//         <Navbar />
//       </div>

//       {/* ✅ Main Content */}
//       <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-6">
//         <Outlet />
//       </main>

//       {/* ✅ Footer */}
//       <Footer />

//       {/* ✅ Toast Notifications */}
//       <Toaster position="top-right" reverseOrder={false} />
//     </div>
//   );
// }


// export default App;