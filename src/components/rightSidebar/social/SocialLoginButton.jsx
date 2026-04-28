"use client";
import { authClient } from "@/lib/auth-client";
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLoginButton = () => {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Google */}
      <button
        onClick={handleGoogleSignIn}
        className="btn w-full border border-blue-500 text-blue-600 bg-transparent hover:bg-blue-50 gap-2"
      >
        <FaGoogle />
        Login with Google
      </button>

      {/* GitHub */}
      <button onClick={handleGithubSignIn} className="btn w-full border border-gray-400 text-gray-700 bg-transparent hover:bg-gray-100 gap-2">
        <FaGithub />
        Login with Github
      </button>
    </div>
  );
};

export default SocialLoginButton;
