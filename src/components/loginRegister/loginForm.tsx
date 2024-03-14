import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import Input from "../shared/animatedInput";

export default function LoginForm() {
  return (
    <div className={formStyles.formInputContainer}>
      <Input
        label="E-Mail"
        inputSettings={{ type: "email" }}
        iconInLabel={faEnvelope}
      />
      <Input
        label="Password"
        inputSettings={{ type: "password" }}
        iconInLabel={faKey}
      />
      <button className={formStyles.loginButton}>LOGIN</button>
    </div>
  );
}

const formStyles = {
  formInputContainer: "flex-1 flex flex-col gap-4",
  loginButton:
    "bg-plum text-snow-white font-normal py-2 rounded tracking-wide text-xl hover:brightness-[110%] transition-bg duration-[.25s] ease-in",
};
