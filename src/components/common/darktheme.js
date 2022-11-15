import { useState, useEffect, useContext } from "react";
import { Switch } from "@headlessui/react";
import { themeChange } from "theme-change";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import { ThemeContext } from "./context-manager";

function DarkTheme() {
  const [enabled, setEnabled] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const { toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      {enabled ? (
        <BsFillMoonStarsFill className="relative  left-[83px] top-[26px] text-xl text-blue-200" />
      ) : (
        <BsFillSunFill className="relative left-20 top-[22px] text-[28px] text-blue-400" />
      )}
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-blue-600" : "bg-gray-200"
        } relative left-2 top-6  inline-flex h-6 w-11 items-center rounded-full`}
        data-set-theme={enabled ? "light" : "dark"}
        data-act-class="ACTIVECLASS"
      >
        {toggleTheme(enabled ? "dark" : "light")}
        <span className="sr-only">Dark mode toggle</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </>
  );
}

export default DarkTheme;
