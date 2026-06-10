
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";

const Wishlist = () => {
  const { user } = useContext(AuthContext);

  const { data: wishlist = [] } = useQuery({
    queryKey: ["wishlist", user?.email],
    enabled: !!user, // important
    queryFn: async () => {
      const res = await axios.get(`/wishlist/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h1>My Wishlist</h1>

      {wishlist.map((item) => (
        <div key={item._id}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;