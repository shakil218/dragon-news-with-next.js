"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Link from "next/link";

const LoginForm=()=> {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validate = (field, value) => {
    let message = "";

    switch (field) {
      case "email":
        if (!/^\S+@\S+\.\S+$/.test(value)) {
          message = "Invalid email format";
        }
        break;

      case "password":
        if (value.length < 8) message = "At least 8 characters";
        else if (!/[A-Z]/.test(value)) message = "Must include uppercase";
        else if (!/[a-z]/.test(value)) message = "Must include lowercase";
        else if (!/[0-9]/.test(value)) message = "Must include number";
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validate("email", form.email);
    validate("password", form.password);

    if (!errors.email && !errors.password && form.email && form.password) {
      alert("Login successful 🚀");
    }
  };

  return (
    <div className="flex items-center justify-center bg-linear-to-br from-indigo-900 via-purple-900 to-black px-4 pb-16 pt-32">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">

        {/* HEADER */}
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          👋 Welcome Back
        </h2>

        <p className="text-white text-center mb-6 text-sm">
          Login to continue your journey 🚀
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* EMAIL */}
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-4 text-gray-400" size={18} />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 bg-transparent border rounded-lg text-white focus:outline-none ${
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
                className={`w-full pl-10 pr-10 py-3 bg-transparent border rounded-lg text-white focus:outline-none ${
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

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-all"
          >
            Login
          </button>

          {/* FOOTER */}
          <p className="text-center text-gray-400 text-sm">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="text-indigo-400 hover:text-indigo-300 font-medium transition-all hover:underline"
            >
              Register
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default LoginForm;