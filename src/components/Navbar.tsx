"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between max-w-7xl mx-auto">
      <div className="flex space-x-6 text-white">
        {/* About Dropdown */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="hover:underline focus:outline-none">
              About
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="bg-white text-black rounded shadow-md py-2 px-2 mt-2 z-20">
            <DropdownMenu.Item asChild>
              <Link
                href="/about/about-parliament"
                className="block px-2 py-1 hover:bg-gray-100 rounded"
              >
                About Parliament
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link
                href="/about/history"
                className="block px-2 py-1 hover:bg-gray-100 rounded"
              >
                History
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link
                href="/about/leadership"
                className="block px-2 py-1 hover:bg-gray-100 rounded"
              >
                Leadership
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        {/* Other Links */}
        <Link href="/system-of-government" className="hover:underline">
          System of Government
        </Link>
        <Link href="/visit-parliament" className="hover:underline">
          Visit Parliament
        </Link>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="hover:underline focus:outline-none">
              Committes
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="bg-white text-black rounded shadow-md py-2 px-2 mt-2 z-20">
            <DropdownMenu.Item asChild>
              <Link
                href="/about/about-parliament"
                className="block px-2 py-1 hover:bg-gray-100 rounded"
              >
                National Assembly
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link
                href="/about/history"
                className="block px-2 py-1 hover:bg-gray-100 rounded"
              >
                National Council
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
};
