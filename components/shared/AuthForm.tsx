"use client";
import React from "react";

type AuthForm = React.FormHTMLAttributes<HTMLFormElement>;

interface AuthFormProps extends AuthForm {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: "Login" | "Register";
}

function AuthForm({ handleSubmit, title, ...props }: AuthFormProps) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" {...props}>
      <h2 className="text-center text-2xl text-slate-700">{title}</h2>

      <input
        type="email"
        placeholder="julian@web.de"
        className="border border-slate-500 active:border-slate-700"
      />
      <input
        type="password"
        placeholder="password"
        className="border border-slate-500 active:border-slate-700"
      />

      <button type="submit">{title} me</button>
    </form>
  );
}

export default AuthForm;
