import React from "react";

const LoginSignup = () => {
  return (
    <div className="border-2 border-gray-50 bg-gray-100">
      <div className=" my-20 mx-96">
        <form action="" className="border-2 bg-white shadow-lg  rounded-lg  px-10 mx-16">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="text-4xl font-bold mb-8 mt-8">Signup</h1>
            <input
              type="text"
              placeholder="Username"
              className="border-2 border-gray-300 rounded-lg p-2 mb-6 w-full "
            />
            <input
              type="text"
              placeholder="Email"
              className="border-2 border-gray-300 rounded-lg p-2 mb-6 w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-2 border-gray-300 rounded-lg p-2 mb-6 w-full"
            />
            <div className="mb-6 flex w-full ">
              {" "}
              <input type="checkbox" className="mr-4"/>
              <label htmlFor="">I accept the 
              <a href="" className="text-blue-800 ml-2 hover:underline">
              terms and conditions
              </a>
                </label>
            </div>
            <button className=" bg-gray-800 hover:bg-gray-700 text-white rounded-lg p-2 w-full mb-6">
              Signup
            </button>
            <p className="mb-6">
              Already have an account?
              <a href="" className="text-blue-800 ml-2 hover:underline">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
