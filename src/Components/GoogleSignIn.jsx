import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { AuthContext } from "../Auth/AuthProvider";

const GoogleSignIn = () => {
  const { signInWithGoogle, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        const userInDb = { name: user.displayName, email: user.email };

        // USer save in db
        fetch("https://frame-maker-server-fahimmuntashir1.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInDb),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success("Google Sign in done!!");
            }
          });

        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      <button
        onClick={handleSignInWithGoogle}
        className="btn btn-primary w-full font-bold text-white space-y-4"
      >
        Sign In With Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
