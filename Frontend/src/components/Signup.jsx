import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Signup Successfull');
          navigate(from,{replace:true})
          setTimeout(() => {
            window.location.reload()
          }, 2000);
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen justify-center items-center shadow-md border">
        <div>
          <div className="w-full modal-box dark:bg-white dark:text-black">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div className="name mt-4 space-y-2">
                <span>Name</span> <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="dark:text-black dark:bg-white shadow-md w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="email mt-4 space-y-2">
                <span>Email</span> <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="dark:text-black dark:bg-white shadow-md w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="password mt-4 space-y-4">
                <span>Password</span> <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="dark:text-black dark:bg-white shadow-md w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-between mt-4">
                <button className="bg-violet-400 hover:bg-violet-500 duration-200 rounded-md px-3 py-1 text-white">
                  Sign-up
                </button>

                <div className="flex mt-1">
                  <p className="text-sm mt-1">Already Registered?</p>
                  <a
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Login
                  </a>
                  <Login />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
