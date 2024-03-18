import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CalendarIcon,
  CheckCircleIcon,
  PencilIcon,
  TrashIcon,
} from "lucide-react";

export function Dashboard() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="grid items-start grid-cols-1 lg:grid-cols-main lg:gap-0 lg:grid-rows-main">
        <div className="lg:border-r border-gray-200 dark:border-gray-800">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-14">
              <h1 className="text-lg font-semibold">All Tasks</h1>
              <Button className="ml-auto" size="sm">
                New Task
              </Button>
            </div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid items-start grid-cols-1 gap-4">
              <div className="grid items-start grid-cols-1 gap-4">
                <div className="bg-white rounded-lg border dark:border-gray-850 shadow">
                  <div className="p-4 grid items-start grid-cols-1 gap-2">
                    <div className="text-sm font-medium">
                      Design standup notes
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Standup notes for the design team
                    </div>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-800" />
                  <div className="p-4 flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Due on 25th July 2023
                      </span>
                    </div>
                    <div className="ml-auto flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-xs font-medium">Completed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="icon" variant="destructive">
                        <TrashIcon className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="outline">
                        <PencilIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid items-start grid-cols-1 gap-4">
              <div className="grid items-start grid-cols-1 gap-4">
                <div className="bg-white rounded-lg border dark:border-gray-850 shadow">
                  <div className="p-4 grid items-start grid-cols-1 gap-2">
                    <div className="text-sm font-medium">
                      Design standup notes
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Standup notes for the design team
                    </div>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-800" />
                  <div className="p-4 flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Due on 25th July 2023
                      </span>
                    </div>
                    <div className="ml-auto flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-xs font-medium">Completed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="icon" variant="destructive">
                        <TrashIcon className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="outline">
                        <PencilIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
