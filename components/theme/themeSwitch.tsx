"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "../ui/switch";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
SunIcon;
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme: theme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className=" flex w-fit  gap-3 items-center  ">
      <MoonIcon
        className={cn(
          "w-6 h-6 text-gray-600",
          theme === "dark" && "text-sky-400"
        )}
      />
      <Switch
        defaultChecked={theme === "light"}
        onCheckedChange={(checked) => {
          if (checked) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <SunIcon
        className={cn(
          "w-6 h-6 text-gray-600",
          theme === "light" && "text-yellow-500"
        )}
      />
    </div>
  );
};

export default ThemeSwitch;
