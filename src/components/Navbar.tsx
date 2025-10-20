"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Type definitions
interface NavItem {
  name: string;
  href: string;
  icon: string;
}

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const navItems: NavItem[] = [
    { name: "Overview", href: "/overview", icon: "/home.svg" },
    { name: "Patients", href: "/patients", icon: "/user.svg" },
    { name: "Schedule", href: "/schedule", icon: "/calender_2.svg" },
    { name: "Message", href: "/message", icon: "/chat.svg" },
    {
      name: "Transactions",
      href: "/transactions",
      icon: "/card.svg",
    },
  ];

  const isActive = (href: string): boolean => pathname === href;

  return (
    <div className="sticky top-0 z-50">
      <div className="h-[10px] bg-gray-light"></div>
      <nav className="bg-white border-b border-gray-200 shadow-sm rounded-[75px]">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 group">
                <Image
                  src="/TestLogo.svg"
                  alt="Tech.Care Logo"
                  width={210}
                  height={48}
                  className="w-[210px] h-[48px] object-contain"
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-sm font-[500] transition-all duration-200 flex items-center space-x-2 ${
                      isActive(item.href)
                        ? "bg-[#01F0D0] shadow-md"
                        : "hover:bg-[#D8FCF7]"
                    }`}
                    style={{
                      color: "#072635",
                    }}
                  >
                    <Image
                      src={Icon}
                      alt={`${item.name} Icon`}
                      width={23}
                      height={17}
                      className="w-[23px] h-[17px] object-contain"
                    />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="relative group cursor-pointer">
                <div className="w-10 h-10 rounded-full">
                  <Image
                    src="/jose.png"
                    alt="Dr. Jose Simmons"
                    width={44}
                    height={44}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="text-right">
                <p
                  className="text-sm font-[500] leading-[19px]"
                  style={{ color: "#072635" }}
                >
                  Dr. Jose Simmons
                </p>
                <p
                  className="text-xs leading-[19px]"
                  style={{ color: "#707070" }}
                >
                  General Practitioner
                </p>
              </div>
              <div className="w-[1px] h-[44px] bg-[#EDEDED] mx-4" />
              <button
                className="p-2 rounded-lg transition-colors hover:bg-[#D8FCF7]"
                style={{ color: "#707070" }}
                aria-label="Settings"
              >
                <Image
                  src="/settings.svg"
                  alt="Settings Icon"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] object-cover"
                />
              </button>

              <button
                className="p-2  hover:bg-[#D8FCF7]"
                aria-label="More options"
              >
                <Image
                  src="/hamburger_vert.svg"
                  alt="More Options Icon"
                  width={3}
                  height={18}
                  className="w-[3px] h-[18px] object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
