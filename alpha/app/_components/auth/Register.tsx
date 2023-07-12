"use client";

interface Props {
  toggleDisplay: (input: string) => void;
}

const Login: React.FC<Props> = ({ toggleDisplay }) => {
  const handleRegister = () => {};

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-100 bg-opacity-50  backdrop-filter backdrop-blur first-line:z-50 px-2">
        <div className=" bg-superwhite px-6 pb-6 pt-4 rounded-xl shadow-md lg:w-1/3 w-[320px] md:w-1/2 min-h-[490px] text-secondary_bold">
          <div className="flex justify-end m-0 p-0">
            <button className="text-xs" onClick={() => toggleDisplay("")}>
              Back
            </button>
          </div>
          <h1 className="font-bold text-lg text-center">Register</h1>

          <p className="text-[0.6rem] font-medium text-center">
            Already have an account?{" "}
            <button onClick={() => toggleDisplay("login")}>Login</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
