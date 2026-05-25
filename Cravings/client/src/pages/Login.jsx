import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import ForgetPasswordModel from "../components/publicModels/ForgetPasswordModel";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { setUser, setIsLogin, setRole } = useAuth();

  const navigate = useNavigate();

  const [isForgetPasswordModelOpen, setIsForgetPasswordModalOpen] =
    useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClearForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const validate = () => {
    let Error = {};

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use Proper Email Format";
    }

    setValidationError(Error);

    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the Form Correctly");
      return;
    }

    try {
      const res = await api.post("/auth/login", formData);

      toast.success(res.data.message);

      // connect
      setUser(res.data.data);
      setIsLogin(true);

      // backup
      sessionStorage.setItem(
        "cravinguser",
        JSON.stringify(res.data.data)
      );

      handleClearForm();

      switch (res.data.data.role) {
        case "manager": {
          setRole("manager");
          navigate("/restaurant-dashboard");
          break;
        }

        case "partner": {
          setRole("partner");
          navigate("/rider-dashboard");
          break;
        }

        case "customer": {
          setRole("customer");

          navigate("/user-dashboard", {
            state: { tab: "overview" },
          });

          break;
        }
      }
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-orange-50 py-10 px-4 flex items-center justify-center">

        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold text-(--color-primary) mb-3">
              Welcome Back 🍔
            </h1>

            <p className="text-gray-600 text-lg">
              Login to continue your delicious journey
            </p>

          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-lg border border-orange-100 overflow-hidden">

            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="p-8"
            >

              {/* Email */}
              <div className="mb-5">

                <label className="block mb-2 font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-400 transition"
                />

              </div>

              {/* Password */}
              <div className="mb-3">

                <label className="block mb-2 font-semibold text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Enter your password"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-400 transition"
                />

              </div>

              {/* Forget Password */}
              <div className="flex justify-end mb-6">

                <button
                  className="text-sm text-orange-500 hover:text-orange-600 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsForgetPasswordModalOpen(true);
                  }}
                >
                  Forget Password?
                </button>

              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-(--color-primary) text-white font-bold py-3 rounded-xl hover:bg-(--color-secondary) transition duration-300 hover:scale-[1.02]"
                >
                  {isLoading ? "Logging In..." : "Login"}
                </button>

                <button
                  type="reset"
                  className="flex-1 bg-gray-200 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-300 transition duration-300 hover:scale-[1.02]"
                >
                  Clear
                </button>

              </div>

              {/* Register Redirect */}
              <p className="text-center mt-6 text-gray-600">

                Don't have an account?{" "}

                <span
                  onClick={() => navigate("/register")}
                  className="text-orange-500 font-semibold cursor-pointer hover:underline"
                >
                  Register
                </span>

              </p>

            </form>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-500 mt-6 text-sm">
            Cravings • Fresh food delivered with love 🍕
          </p>

        </div>
      </div>

      {isForgetPasswordModelOpen && (
        <ForgetPasswordModel
          onClose={() =>
            setIsForgetPasswordModalOpen(false)
          }
        />
      )}
    </>
  );
};

export default Login;