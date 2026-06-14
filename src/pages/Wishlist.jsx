
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
const token = localStorage.getItem("token");
  const { data: wishlist = [] } = useQuery({
    queryKey: ["wishlist", user?.email],
    enabled: !!user?.email && !!token,
    queryFn: async () => {
      const res = await axios.get(`/wishlist/${user.email}`);
      return res.data;
    },
  });
return (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
    <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
      My Wishlist ❤️
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {wishlist.map((item) => (
        <div
          key={item._id}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition p-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-40 w-full object-cover rounded-lg"
          />

          <h2 className="mt-3 text-lg font-semibold text-gray-800 dark:text-white">
            {item.title}
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-300">
            {item.category}
          </p>
        </div>
      ))}
    </div>
  </div>
);
}
 export default Wishlist;