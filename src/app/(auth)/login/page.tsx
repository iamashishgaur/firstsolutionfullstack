"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
// export default function LoginPage() {
//     const router = useRouter();
//     const [user, setUser] = React.useState({
//         email: "",
//         password: "",

//     })
//     const [buttonDisabled, setButtonDisabled] = React.useState(false);
//     const [loading, setLoading] = React.useState(false);

//     const onLogin = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.post("/api/users/login", user);
//             console.log("Login success", response.data);
//             toast.success("Login success");
//             router.push("/profile");
//         } catch (error:any) {
//             console.log("Login failed", error.message);
//             toast.error(error.message);
//         } finally{
//         setLoading(false);
//         }
//     }

//     useEffect(() => {
//         if(user.email.length > 0 && user.password.length > 0) {
//             setButtonDisabled(false);
//         } else{
//             setButtonDisabled(true);
//         }
//     }, [user]);

//     return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//         <h1>{loading ? "Processing" : "Login"}</h1>
//         <hr />

//         <label htmlFor="email">email</label>
//         <input
//         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//             id="email"
//             type="text"
//             value={user.email}
//             onChange={(e) => setUser({...user, email: e.target.value})}
//             placeholder="email"
//             />
//         <label htmlFor="password">password</label>
//         <input
//         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//             id="password"
//             type="password"
//             value={user.password}
//             onChange={(e) => setUser({...user, password: e.target.value})}
//             placeholder="password"
//             />
//             <button
//             onClick={onLogin}
//             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login here</button>
//             <Link href="/signup">Visit Signup page</Link>
//         </div>
//     )

// }
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Breadcrumbs from "@/components/breadcrumb/breadcrumb";
import BreadcrumbCard from "@/components/breadcrumb/breadcrumbcard";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    // <div className="flex flex-col justify-center items-center w-full  h-[calc(100vh-4.4rem)]">
    //   <div className="w-full p-20 h-[100px] flex flex-col justify-center items-center from-slate-800 ">
    //     <h1 className="text-4xl font-semibold">Login & Register</h1>
    //     <Breadcrumbs title="Login & Register" />
    //   </div>

    // </div>
    <div className="w-full h-full justify-center flex gap-24 items-center  pb-10 ">
      <div className=" bg-muted mt-10 lg:block">
        <Image
          src="/images/login.gif"
          alt="Image"
          width="550"
          height="180"
          className="  dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <Card className="w-full max-w-sm">
        {loading ? "Processing" : "Login"}
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={user.password}
                placeholder="********"
                onChange={(e: any) =>
                  setUser({ ...user, password: e.target.value })
                }
                required
              />
            </div>
            <Button type="submit" onClick={onLogin} className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full flex gap-3">
              <FcGoogle size={25} />
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
        <ToastContainer />
      </Card>
    </div>
  );
}
