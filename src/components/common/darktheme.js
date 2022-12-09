import { useState, useContext } from "react";
import { Switch } from "@headlessui/react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import { ThemeContext } from "./context-manager";

function DarkTheme() {
  const [enabled, setEnabled] = useState(localStorage.theme === "dark");

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-blue-600" : "bg-grey-200"
        } relative left-32 top-6  inline-flex h-6 w-11 items-center rounded-full`}
      >
        {toggleTheme(enabled ? "dark" : "light")}

        {enabled
          ? localStorage.setItem("theme", "dark") ||
            document.documentElement.classList.add("dark")
          : localStorage.setItem("theme", "light") ||
            document.documentElement.classList.remove("dark")}
        <span className="sr-only">Dark mode toggle</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
        {enabled ? (
          <BsFillMoonStarsFill className="relative right-3 text-lg text-blue-900" />
        ) : (
          <BsFillSunFill className="relative left-2  text-lg text-grey-400" />
        )}
      </Switch>
    </>
  );
}

export default DarkTheme;
