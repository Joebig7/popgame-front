import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../common/logo";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { POPIDEA_URL } from "../common/url-manage";
import { AiOutlineLogin } from "react-icons/ai";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getLoginInfo(token, setLoginInfo) {
  axios
    .get(POPIDEA_URL + "/v1/users/auth/userinfo?token=" + token)
    .then((response) => {
      if (response.status === 200 && response.data.code === 200) {
        let result = response.data.data;
        setLoginInfo({
          username: result.username,
          avatar: result.avatar,
          status: true,
          email: result.email,
        });
      } else {
        setLoginInfo({
          username: "",
          avatar: "",
          status: false,
        });
      }
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

function loginOut(setLoginInfo) {
  localStorage.removeItem("token");
  setLoginInfo({
    username: "",
    email: "",
    avatar: "",
    status: false,
  });
}

export default function HomeNavbar() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    email: "",
    avatar: "",
    status: false,
  });

  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log("token===" + token);
    if (token !== "" && token !== null) {
      let subToken = token.substring(7);
      getLoginInfo(subToken, setLoginInfo);
    }
  }, []);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex px-2 lg:px-0">
                <Logo className="relative   text-3xl font-black normal-case tracking-wide text-white no-underline drop-shadow-2xl" />
              </div>
              <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <SearchIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border border-transparent bg-gray-700 py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:block">
                <div className="flex items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-4 flex-shrink-0">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        {loginInfo.status === true ? (
                          <img
                            className="h-8 w-8 rounded-full"
                            src={loginInfo.avatar}
                            alt=""
                          />
                        ) : (
                          <AiOutlineLogin className="h-6 w-6 " />
                        )}
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-28 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {loginInfo.status === true ? (
                          <>
                            {" "}
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  主 页
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => {
                                    loginOut(setLoginInfo);
                                  }}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  退 出 登 录
                                </button>
                              )}
                            </Menu.Item>
                          </>
                        ) : (
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/login"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                请 登 录
                              </Link>
                            )}
                          </Menu.Item>
                        )}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  {loginInfo.status === true ? (
                    <img
                      className="h-8 w-8 rounded-full"
                      src={loginInfo.avatar}
                      alt=""
                    />
                  ) : (
                    <AiOutlineLogin className="h-6 w-6 text-white" />
                  )}
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    {loginInfo.status === true ? (
                      loginInfo.username
                    ) : (
                      <>
                        <Disclosure.Button className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
                          <Link to="/login" className="text-gray-200">
                            请 登 录
                          </Link>
                        </Disclosure.Button>
                      </>
                    )}
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {loginInfo.status === true ? loginInfo.email : ""}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {loginInfo.status === true ? (
                  <>
                    {" "}
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      主页
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      onClick={() => {
                        loginOut(setLoginInfo);
                      }}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      退 出 登 录
                    </Disclosure.Button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
