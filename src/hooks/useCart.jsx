import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
const useCart = (email) => {
  const { user, loading } = useContext(AuthContext);
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `https://frame-maker-server-fahimmuntashir1.vercel.app/carts?email=${user?.email}`
      );
      return response.json();
    },
  });
  return [cart, refetch];
};
export default useCart;
