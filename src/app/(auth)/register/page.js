import RegisterForm from "./RegisterForm";

export const metadata = {
  title: "Register - Dragon News",
  description:
    "Create a new Dragon News account to stay updated with the latest news and stories.",
  keywords: [
    "register",
    "sign up",
    "create account",
    "dragon news",
    "authentication",
  ],
};

const RegisterPage = () => {
  return <RegisterForm />;
};

export default RegisterPage;
