"use client";

import LoginRegisterFormType from "@/types/loginRegisterFormType";
import { useState } from "react";
import FormPicker from "./formPicker";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

export default function LoginRegisterForm() {
  const [formType, setFormType] = useState<LoginRegisterFormType>("LOGIN");

  return (
    <form className={loginRegisterFormStyles.formContainer}>
      <div className={loginRegisterFormStyles.formContent}>
        <FormPicker formType={formType} setFormType={setFormType} />
        {formType === "LOGIN" ? <LoginForm /> : <RegisterForm />}
      </div>
    </form>
  );
}

const loginRegisterFormStyles = {
  formContainer:
    "w-[500px] shadow-lg rounded-md  absolute left-1/2 right-1/2 -translate-x-1/2 -top-[50px] bg-white p-10 flex justify-center items-center",
  formContent: "w-full flex flex-col gap-4",
};
