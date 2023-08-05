import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useAdmin = () => {
  const user = useContext(AuthContext);
  const queryClient = useQueryClient();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await queryClient.fetchQuery(`/users/admin/${user?.email}`);
      return res.admin;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
