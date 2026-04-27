"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import Link from "next/link";

const RegisterForm=()=> {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    let message = "";

    switch (field) {
      case "name":
        if (value.length < 3) message = "Minimum 3 characters required";
        break;

      case "email":
        if (!/^\S+@\S+\.\S+$/.test(value))
          message = "Invalid email format";
        break;

      case "password":
        if (value.length < 8) message = "At least 8 characters";
        else if (!/[A-Z]/.test(value)) message = "Must include uppercase";
        else if (!/[a-z]/.test(value)) message = "Must include lowercase";
        else if (!/[0-9]/.test(value)) message = "Must include number";
        break;

      case "confirmPassword":
        if (value !== form.password) message = "Passwords do not match";
        break;

      case "terms":
        if (!value) message = "You must accept terms";
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setForm((prev) => ({ ...prev, [name]: val }));
    validate(name, val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Object.entries(form).forEach(([key, value]) => {
      validate(key, value);
    });

    const hasError = Object.values(errors).some((e) => e);

    if (!hasError) {
      alert("Form is valid 🚀");
    }
  };

  return (
    <div className="flex items-center justify-center bg-linear-to-br from-indigo-900 via-purple-900 to-black px-4 pb-16 pt-32">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          🚀 Create Account
        </h2>

        <p className="text-white text-center mb-4 text-sm">
          Join Dragon News and stay updated with the latest stories.✨
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NAME */}
          <div>
            <div className="relative">
              <User className="absolute left-3 top-4 text-gray-400" size={18} />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 bg-transparent border rounded-lg text-white ${
                  errors.name ? "border-red-500" : "border-gray-500"
                }`}
                placeholder="Full Name"
              />
            </div>
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-4 text-gray-400" size={18} />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 bg-transparent border rounded-lg text-white ${
                  errors.email ? "border-red-500" : "border-gray-500"
                }`}
                placeholder="Email Address"
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-4 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                className={`w-full pl-10 pr-10 py-3 bg-transparent border rounded-lg text-white ${
                  errors.password ? "border-red-500" : "border-gray-500"
                }`}
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-4 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-4 text-gray-400" size={18} />
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 bg-transparent border rounded-lg text-white ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-500"
                }`}
                placeholder="Confirm Password"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-400 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* TERMS */}
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
              className="accent-indigo-500"
            />
            <span>I agree to Terms & Privacy</span>
          </div>

          {errors.terms && (
            <p className="text-red-400 text-sm">{errors.terms}</p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold"
          >
            Create Account
          </button>

          {/* LINK */}
          <p className="text-center text-gray-400 text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-indigo-400 hover:text-indigo-300 font-medium hover:underline"
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default RegisterForm;