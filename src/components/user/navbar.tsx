"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiLogIn } from "react-icons/fi";
import Button from "../common/button";
import classNames from "classnames";
import Image from 'next/image';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="bg-white  px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-20">
          {/* Logo */}
          <div className="flex items-center xl:ml-40 lg:ml-20">
          <Image src="/logo-small.png" alt="Logo" width={100} height={60} className="rounded-full" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 text-lg text-black">
            <Link href="/" className="hover:text-[#01589A] hom">
              Home
            </Link>
            <Link href="/user/courses" className="hover:text-[#01589A]">
              Courses
            </Link>
          </div>
        </div>
        {/* Desktop Login Button */}
        <div className="hidden md:flex gap-x-4 xl:mr-40 lg:mr-20">
        <Button href="/user/auth/login" rightIcon={<FiLogIn size={18} />}>Login</Button>
          <Button variant="outlined" href="/user/auth/signup" rightIcon={<FiLogIn size={18} />}>
            Signup
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <button

          className="md:hidden text-[#01589A] hover:cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        >
          <FiMenu size={28} />
        </button>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={classNames(
          "fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-300 z-40",
          {
            "opacity-15 pointer-events-auto": sidebarOpen,
            "opacity-0 pointer-events-none": !sidebarOpen,
          }
        )}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar Drawer */}
      <div
        className={classNames(
          "fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 flex flex-col p-6",
          {
            "translate-x-0": sidebarOpen,
            "translate-x-full": !sidebarOpen,
          }
        )}
      >
        <div className="flex justify-between items-center mb-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
           <Image src="/logo-small.png" alt="Logo" width={80} height={60} className="rounded-full" />
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-[#01589A] hover:cursor-pointer"
          >
            <FiX size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-4 text-lg">
          <Link
            href="/"
            onClick={() => setSidebarOpen(false)}
            className="hover:text-[#01589A] hover:cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/user/courses"
            onClick={() => setSidebarOpen(false)}
            className="hover:text-[#01589A] hover:cursor-pointer"
          >
            Courses
          </Link>
        </div>

        <div className="mt-auto flex flex-col pt-8 gap-y-2">
  <Button href="/user/auth/login" rightIcon={<FiLogIn size={18} />}>Login</Button>
  <Button href="/user/auth/signup" variant="outlined" rightIcon={<FiLogIn size={18} />}>
    Signup
  </Button>
</div>

      </div>
    </>
  );
};

export default Navbar;
