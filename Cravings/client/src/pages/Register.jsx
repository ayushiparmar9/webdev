import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    role: "",
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
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
      role: "",
    });
  };

  const validate = () => {

    let Error = {};

    if (formData.fullName.length < 3) {
      Error.fullName =
        "Name should be More Than 3 Characters";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
        Error.fullName =
          "Only Contain A-Z , a-z and space";
      }
    }

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use Proper Email Format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber =
        "Only Indian Mobile Number allowed";
    }

    if (!formData.role) {
      Error.role = "Please choose a role";
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

      const res = await api.post(
        "/auth/register",
        formData
      );

      toast.success(res.data.message);

      handleClearForm();

      navigate("/login");

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

        <div className="w-full max-w-xl">

          {/* Heading */}
          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold text-(--color-primary) mb-3">
              Join Cravings 🍕
            </h1>

            <p className="text-gray-600 text-lg">
              Create your account and start ordering
            </p>

          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-lg border border-orange-100 overflow-hidden">

            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="p-8"
            >

              {/* Role Selection */}
              <div className="mb-6">

                <label className="block mb-3 font-semibold text-gray-700">
                  Select Role
                </label>

                <div className="flex flex-wrap gap-4">

                  <label className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-xl cursor-pointer hover:bg-orange-100 transition">

                    <input
                      type="radio"
                      name="role"
                      checked={formData.role === "manager"}
                      value={"manager"}
                      onChange={handleChange}
                    />

                    Restaurant Manager

                  </label>

                  <label className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-xl cursor-pointer hover:bg-orange-100 transition">

                    <input
                      type="radio"
                      name="role"
                      checked={formData.role === "partner"}
                      value={"partner"}
                      onChange={handleChange}
                    />

                    Partner

                  </label>

                  <label className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-xl cursor-pointer hover:bg-orange-100 transition">

                    <input
                      type="radio"
                      name="role"
                      checked={formData.role === "customer"}
                      value={"customer"}
                      onChange={handleChange}
                    />

                    Customer

                  </label>

                </div>

              </div>

              {/* Full Name */}
              <div className="mb-5">

                <label className="block mb-2 font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-400 transition"
                />

                {validationError.fullName && (
                  <span className="text-xs text-red-500">
                    {validationError.fullName}
                  </span>
                )}

              </div>

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

              {/* Mobile */}
              <div className="mb-5">

                <label className="block mb-2 font-semibold text-gray-700">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Enter mobile number"
                  maxLength="10"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-400 transition"
                />

              </div>

              {/* Password */}
              <div className="mb-5">

                <label className="block mb-2 font-semibold text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Create password"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-400 transition"
                />

              </div>

              {/* Confirm Password */}
              <div className="mb-6">

                <label className="block mb-2 font-semibold text-gray-700">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-400 transition"
                />

              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-(--color-primary) text-white font-bold py-3 rounded-xl hover:bg-(--color-secondary) transition duration-300 hover:scale-[1.02]"
                >
                  {isLoading
                    ? "Creating Account..."
                    : "Register"}
                </button>

                <button
                  type="reset"
                  className="flex-1 bg-gray-200 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-300 transition duration-300 hover:scale-[1.02]"
                >
                  Clear
                </button>

              </div>

              {/* Login Redirect */}
              <p className="text-center mt-6 text-gray-600">

                Already have an account?{" "}

                <span
                  onClick={() => navigate("/login")}
                  className="text-orange-500 font-semibold cursor-pointer hover:underline"
                >
                  Login
                </span>

              </p>

            </form>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-500 mt-6 text-sm">
            Cravings • Fresh food delivered with love 🍔
          </p>

        </div>
      </div>
    </>
  );
};

export default Register;