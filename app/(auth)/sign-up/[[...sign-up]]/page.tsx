import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex h-screen max-w-full  items-center justify-center m-20 ">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
