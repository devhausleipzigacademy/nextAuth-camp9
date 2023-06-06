"useClient";
"use client";
import React from "react";
import AuthForm from "./AuthForm";

function Modal() {
  return (
    <div className="w-[250px] h-[250px] bg-white">
      <AuthForm title="Register" handleSubmit={() => {}} />
    </div>
  );
}

export default Modal;
