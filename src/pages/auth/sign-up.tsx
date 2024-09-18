import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/input";
import { Button } from "../../components";
import React, { useContext, useState } from "react";
import { useSignupMutation } from "../../api/authApi";
import { UserContext } from "../../context/user-context";
import { toast } from "sonner";

export default function SignUp() {
  const [signUp, { isLoading }] = useSignupMutation();
  const { setUser, setToken } = useContext(UserContext);
  const handleNavigate = useNavigate();

  const [allInputs, setAllInputs] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAllInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signUp(allInputs);

    if (res?.data?.success) {
      const user = res?.data?.data?.user;
      const token = res?.data?.data?.token;

      if (token) {
        setToken(token);
        localStorage.setItem("token", token);
      }

      if (user) {
        setUser({
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
        });
        localStorage.setItem("user", JSON.stringify(user));
        handleNavigate("/dashboard/blogs");
        toast.success("Registered successfully", {
          description: "Start creating your blogs",
        });
      }
    }
  };

  return (
    <section className="w-full h-full flex flex-col items-center">
      <h1 className="text-3xl font-bold font-bricolage-grotesque mb-4">
        Create account 👋
      </h1>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col items-stretch gap-4">
          <Input
            placeholder="Enter your name"
            name="fullName"
            onChange={handleChange}
          />
          <Input
            placeholder="Enter your email"
            type="email"
            name="email"
            onChange={handleChange}
          />
          <div className="w-full">
            <Input
              placeholder="Enter your password"
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>

        <Button className="mt-4" type="submit" loading={isLoading}>
          Sign in
        </Button>
      </form>

      <p className="text-gray-500 text-sm mt-4">
        Already signed up?{" "}
        <Link
          to="/"
          className="text-indigo-600 font-medium cursor-pointer hover:underline"
        >
          Sign in
        </Link>
      </p>
    </section>
  );
}
