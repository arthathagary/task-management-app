import { CheckCircleIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function NavBar() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="px-4 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-4">
              <Link className="flex items-center space-x-2" href="#">
                <CheckCircleIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Tasks</span>
              </Link>
              <nav className="flex items-center space-x-4">
                <Link
                  className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  href="#"
                >
                  All
                </Link>
                <Link
                  className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  href="#"
                >
                  Completed
                </Link>
                <Link
                  className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  href="#"
                >
                  In progress
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Button className="w-8 h-8 p-1" size="icon" variant="ghost">
                  <SearchIcon className="w-4 h-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
              <DropdownMenu>
                <div>
                  <DropdownMenuTrigger>
                    <div className="rounded-full focus:outline-none">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <span className="sr-only">Open user menu</span>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <div>
                      <DropdownMenuItem>
                        <div>
                          <Link
                            className="block px-3 text-sm leading-5 rounded-md text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                            href="#"
                          >
                            Profile
                          </Link>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <div>
                          <Link
                            className="block px-3 text-sm leading-5 rounded-md text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                            href="#"
                          >
                            Settings
                          </Link>
                        </div>
                      </DropdownMenuItem>
                      <div />
                      <DropdownMenuItem>
                        <div>
                          <Link
                            className="block px-3 text-sm leading-5 rounded-md text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                            href="#"
                          >
                            Logout
                          </Link>
                        </div>
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </div>
              </DropdownMenu>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}
