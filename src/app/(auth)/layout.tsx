// import SideNav from "@/app/ui/dashboard/sidenav";

import LoginPage from "./login/page";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full h-screen">{children}</div>;
}
