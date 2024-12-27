"use client";

import { SiteHeader } from "@/components/sections/home-page/nav-bar";
import Footer from "@/components/sections/footer/footer";
import { usePathname } from "next/navigation";

interface NavigationWrapperProps {
  children: React.ReactNode;
}

export default function NavigationWrapper({ children }: NavigationWrapperProps) {
  const pathname = usePathname();
  const isSignInPage = pathname === "/sign-in" || pathname === "/sign-up" || pathname === "/reset-password" || pathname === "/email-verification" || pathname === "/forget-password" || pathname === "/maintanance" ;

  return (
    <>
      {!isSignInPage && <SiteHeader />}
      {children}
      {!isSignInPage && <Footer />}
    </>
  );
} 