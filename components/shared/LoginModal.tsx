"use client";
import AuthForm from "@/components/shared/AuthForm";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div className="w-[250px] h-[250px] bg-white">
        <AuthForm title="Login" handleSubmit={() => {}} />
        <button onClick={() => signIn("github")}>Login with Github</button>
      </div>
    </div>
  );
}

export default Login;
