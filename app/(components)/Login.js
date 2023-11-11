"use client";
export default function Login() {
  return (
    <div className="bg-red-200 flex flex-col justify-center items-center">
      <h1>Login component</h1>
      <div className=" w-1/4">
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          Username
        </label>
        <input
          type="text"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm text-black w-full"
        />
      </div>
      <div className=" w-1/4">
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          Password
        </label>
        <input
          type="text"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm text-black w-full"
        />
      </div>
      <div className=" w-1/4">
        <button className="bg-violet-700  hover:bg-violet-400 active:bg-violet-600 border rounded-lg px-3 py-2 mt-1 mb-5 w-full">
          Login
        </button>
      </div>
    </div>
  );
}
