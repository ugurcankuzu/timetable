import Image from "next/image";
import logo from "../../public/logo.png";
import LoginRegisterForm from "@/components/loginRegister/loginRegisterForm";

export default function Home() {
  return (
    <main className={homePageStyles.mainContainer}>
      <div className={homePageStyles.mainContent}>
        <div className={homePageStyles.logoContainer}>
          <Image
            src={logo}
            width={200}
            alt="Mehmet Akif Ersoy Üniversitesi Logo"
          />
          <h1 className={homePageStyles.header}>EasyScheduler</h1>
        </div>
        <div className={homePageStyles.formContainer}>
          <LoginRegisterForm />
        </div>
      </div>
    </main>
  );
}

const homePageStyles = {
  mainContainer: "bg-gradient-purple min-h-screen h-screen w-screen",
  mainContent: "w-full h-full",
  logoContainer: "w-full h-1/3 flex flex-col justify-center items-center",
  header: "font-bold text-3xl text-snow-white",
  formContainer: "h-2/3 w-full bg-snow-white relative bgPattern",
};
