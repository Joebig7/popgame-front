import { useState, useEffect, createContext } from "react";
import { Switch } from "@headlessui/react";
import { themeChange } from "theme-change";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const ThemeContext = createContext(null);

function DarkTheme() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    themeChange(false);
    localStorage.setItem("mode", enabled)
  }, [enabled]);

  return (
    <ThemeContext.Provider value={enabled}>
      {enabled ? (
        <BsFillMoonStarsFill className="relative left-[670px] top-7 text-xl text-blue-200" />
      ) : (
        <BsFillSunFill className="relative left-[669px] top-[22px] text-[28px] text-blue-400" />
      )}
      <Switch
        checked={localStorage.getItem("mode")}
        onChange={setEnabled&&localStorage.setItem("mode", enabled)}
        className={`${
          enabled ? "bg-blue-600" : "bg-gray-200"
        } relative top-6 left-[300px] inline-flex h-6 w-11 items-center rounded-full`}
        data-toggle-theme="dark,light"
        data-act-class="ACTIVECLASS"
      >
       
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </ThemeContext.Provider>
  );
}

export default DarkTheme;
