import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ScrollToTop />
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>© 2026 Blog Website | All Rights Reserved</p>
      </footer>

    </div>
  );
}

export default App;









// import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";
// import { Toaster } from "react-hot-toast";
// import Footer from "./components/Footer";

// function App() {
//   const { loading } = useContext(AuthContext);

//   // ✅ Show loading while auth checking
//   if (loading) {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         <h2 className="text-xl font-semibold">Loading...</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
      
//       {/* ✅ Navbar */}
//       <Navbar />

//       {/* ✅ Main Content */}
//       <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-6">
//         <Outlet />
//       </main>

//       {/* ✅ Footer */}
//       <Footer />

//       {/* ✅ Toast Notifications */}
//       <Toaster position="top-right" />
//     </div>
//   );
// }

// export default App;