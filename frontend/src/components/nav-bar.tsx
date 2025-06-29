"use client";

import { ListTodo } from "lucide-react";

import { useTheme } from "next-themes";
import { ModeToggle } from "@/app/mode-toggle";
import { Button } from "@/components/ui/button";

export default function NavBar() {
    const { theme } = useTheme();

    // color switcher
    const bgColor = theme === "dark" ? "bg-black border-t" : "bg-white";

    // tsx 
    return (
        <div className={`geist-sans relative w-full h-[92px] overflow-hidden 
            flex justify-between items-center px-6 border-b ${bgColor}  `}
        >
            {/* Header with Title and Icon */}
            <AppNameLogo />

            <div className="flex items-center gap-3 justify-center">
                <Button>Add Task</Button>
                <ModeToggle />
            </div>
        </div>
    );
}

export function AppNameLogo() {
    return (
        //  main container
        <header className="flex items-center gap-2 left-10 top-8">
            {/* icon wrapper */}
            <div className="size-9 bg-primary rounded-md flex justify-center items-center">
                
                <img src="/logo.svg" alt="App Logo" className="h-6 w-6" aria-hidden="true"/>
            </div>

            {/* App name */}
            <h1 className="text-2xl font-bold">
                task <span className="font-normal text-primary"> manager thingie</span>
            </h1>
        </header>
    );
}