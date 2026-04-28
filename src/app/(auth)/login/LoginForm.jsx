"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client"; // adjust path
import { toast } from "react-toastify";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({});

  // 🔍 Validation
  const validate = (field, value) => {
    let message = "";

    switch (field) {
      case "email":
        if (!value) message = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(value))
          message = "Invalid email format";
        break;

      case "password":
        if (!value) message = "Password is required";
        break;
    }

    return message;
  };

  // ✏️ Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({
      ...prev,
      [name]: validate(name, value),
    }));
  };

  // 👆 Blur
  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched((prev) => ({ ...prev, [name]: true }));

    setErrors((prev) => ({
      ...prev,
      [name]: validate(name, value),
    }));
  };

  // 🚀 Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      email: validate("email", form.email),
      password: validate("password", form.password),
    };

    setErrors(newErrors);
    setTouched({
      email: true,
      password: true,
    });

    const hasError = Object.values(newErrors).some((e) => e);
    if (hasError) return;

    try {
      setLoading(true);

      const { data, error } = await authClient.signIn.email({
        email: form.email,
        password: form.password,
        rememberMe: true,
      });

      if (error) {
        throw new Error(error.message || "Login failed");
      }

      toast.success("Sign In User successfully 🚀");
      router.push("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
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

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* EMAIL */}
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-4 text-gray-400" size={18} />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email Address"
                className={`w-full pl-10 pr-4 py-3 bg-transparent border rounded-lg text-white ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-500"
                }`}
              />
            </div>
            {errors.email && touched.email && (
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
                onBlur={handleBlur}
                placeholder="Password"
                className={`w-full pl-10 pr-10 py-3 bg-transparent border rounded-lg text-white ${
                  errors.password && touched.password
                    ? "border-red-500"
                    : "border-gray-500"
                }`}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-4 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.password && touched.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold transition ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-linear-to-br from-indigo-950 via-purple-950 to-black"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* FOOTER */}
          <p className="text-center text-gray-400 text-sm">
            Don’t have an account?{" "}
            <Link href="/register" className="text-indigo-400 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
