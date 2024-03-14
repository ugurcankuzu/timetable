import LoginRegisterFormType from "@/types/loginRegisterFormType";
import { Dispatch, SetStateAction } from "react";

interface IFormPickerComponent {
  formType: LoginRegisterFormType;
  setFormType: Dispatch<SetStateAction<LoginRegisterFormType>>;
}

export default function FormPicker({
  formType,
  setFormType,
}: IFormPickerComponent) {
  return (
    <div className={formPickerStyles.formPicker}>
      <a
        href="javascript:void(0);"
        className={`${formPickerStyles.formTypeSelect} ${
          formType === "REGISTER" ? formPickerStyles.formTypeSelectActive : null
        }`}
        onClick={() => setFormType("REGISTER")}
      >
        Signup
      </a>
      <a
        href="javascript:void(0);"
        className={`${formPickerStyles.formTypeSelect} ${
          formType === "LOGIN" ? formPickerStyles.formTypeSelectActive : null
        }`}
        onClick={() => setFormType("LOGIN")}
      >
        Login
      </a>
    </div>
  );
}

const formPickerStyles = {
  formPicker:
    "bg-snow-white rounded-sm flex justify-center items-center gap-4 px-4 py-2",
  formTypeSelect:
    "flex-1 px-2 py-1 font-bold tracking-wide text-center transition-bg duration-[.25s]",
  formTypeSelectActive: "bg-plum text-white rounded shadow",
};
