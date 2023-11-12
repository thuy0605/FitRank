"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const login = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000"}/api/login`,
      {
        method: "POST",
        body: JSON.stringify({
          username: form.get("username"),
          password: form.get("password")
        }),
      }
    );
    if (response.status !== 200) {
      alert('Login failed!'); 
      return;
    }
    router.push('/user');
  };
  return (
    <form onSubmit={login}>
      <div className="flex flex-col justify-center items-center">
        <div className=" w-1/4">
          <label className="font-semibold text-sm text-gray-600 pb-1 block">
            Username
          </label>
          <input
            type="text"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm text-black w-full"
            name="username"
          />
        </div>
        <div className=" w-1/4">
          <label className="font-semibold text-sm text-gray-600 pb-1 block">
            Password
          </label>
          <input
            type="password"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm text-black w-full"
            name="password"
          />
        </div>
        <div className=" w-1/4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-400 active:bg-violet-600 border rounded-lg px-3 py-2 mt-1 mb-5 w-full"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
