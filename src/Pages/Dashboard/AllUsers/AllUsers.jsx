import React from "react";
import { useQuery, useMutation, queryCache } from "@tanstack/react-query";
import { Toaster, toast } from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();
    return data;
  });

  const { mutate: makeUserTeacher } = useMutation(
    (userId) =>
      fetch(`http://localhost:5000/users/admin/${userId}`, {
        method: "PATCH",
      }).then((res) => res.json()),
    {
      onSuccess: (data, userId) => {
        if (data.modifiedCount) {
          refetch();
          toast.success("Made user a new Teacher");
        }
      },
    }
  );

  console.log(users);

  const handleDeleteUser = () => {
    // Implement your delete user logic here
  };

  return (
    <div className="w-full">
      <Toaster position="top-center" reverseOrder={false} />

      <h3 className="text-3xl font-semibold">Total users {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <th>{user.email}</th>
                <td>{user.name}</td>
                <td className="bg-orange">
                  <button
                    onClick={() => makeUserTeacher(user._id)}
                    className="btn btn-warning"
                  >
                    {user.role === "teacher" ? "Teacher" : "Make Teacher"}
                  </button>{" "}
                </td>
                <td>Blue</td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
