"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import user from "@/assets/user.png";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    photo: "",
    email: "",
    password: "",
    terms: false,
  });

  // 🔍 Validation
  const validate = (field, value) => {
    let message = "";

    switch (field) {
      case "name":
        if (!value) message = "Name is required";
        else if (value.length < 3) message = "Minimum 3 characters required";
        break;

      case "photo":
        if (!value) message = "Photo URL is required";
        else if (
          !/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))/i.test(value)
        )
          message = "Enter a valid image URL";
        break;

      case "email":
        if (!value) message = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(value))
          message = "Invalid email format";
        break;

      case "password":
        if (!value) message = "Password is required";
        else if (value.length < 8) message = "At least 8 characters";
        else if (!/[A-Z]/.test(value)) message = "Must include uppercase";
        else if (!/[a-z]/.test(value)) message = "Must include lowercase";
        else if (!/[0-9]/.test(value)) message = "Must include number";
        break;

      case "terms":
        if (!value) message = "You must accept terms";
        break;
    }

    return message;
  };

  // ✏️ Handle Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setForm((prev) => ({ ...prev, [name]: val }));

    setErrors((prev) => ({
      ...prev,
      [name]: validate(name, val),
    }));
  };

  // 👆 Handle Blur
  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setTouched((prev) => ({ ...prev, [name]: true }));

    setErrors((prev) => ({
      ...prev,
      [name]: validate(name, val),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔍 validate all fields
    const newErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      newErrors[key] = validate(key, value);
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      photo: true,
      email: true,
      password: true,
      terms: true,
    });

    const hasError = Object.values(newErrors).some((e) => e);
    if (hasError) return;

    try {
      setLoading(true);
      const { data, error } = await authClient.signUp.email({
        email: form.email,
        password: form.password,
        name: form.name,
        image: form.photo || user,
        callbackURL: "/",
      });

      if (error) {
        throw new Error(error.message || "Signup failed");
      }

      console.log("User created:", data);
      toast.success("Account created successfully 🚀");
      router.push("/");
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
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
                onBlur={handleBlur}
                placeholder="Full Name"
                className={`w-full pl-10 pr-4 py-3 bg-transparent border rounded-lg text-white ${
                  errors.name && touched.name
                    ? "border-red-500"
                    : "border-gray-500 focus:border-indigo-500"
                }`}
              />
            </div>
            {errors.name && touched.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* PHOTO */}
          <div>
            <div className="relative">
              <User className="absolute left-3 top-4 text-gray-400" size={18} />
              <input
                name="photo"
                value={form.photo}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Photo URL"
                className={`w-full pl-10 pr-4 py-3 bg-transparent border rounded-lg text-white ${
                  errors.photo && touched.photo
                    ? "border-red-500"
                    : "border-gray-500 focus:border-indigo-500"
                }`}
              />
            </div>

            {errors.photo && touched.photo && (
              <p className="text-red-400 text-sm mt-1">{errors.photo}</p>
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

          {/* TERMS */}
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
              onBlur={handleBlur}
              className="accent-indigo-500"
            />
            <span>I agree to Terms & Privacy</span>
          </div>
          {errors.terms && touched.terms && (
            <p className="text-red-400 text-sm">{errors.terms}</p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold cursor-pointer transition
            ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-linear-to-br from-indigo-950 via-purple-950 to-black"
            }
            `}
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

          {/* LINK */}
          <p className="text-center text-gray-400 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium transition-all hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
