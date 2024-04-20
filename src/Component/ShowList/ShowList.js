import React from "react";
import "@lottiefiles/lottie-player";
import "./showlist.css";
import ToDoList from "./ToDoList";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function ShowList() {
  const product = useSelector((state) => state.listslice);
  return (
    <>
      <div className="main-show">
        <div className="show-banner dark">
          <div class="relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]"></div>
          <div class="relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]">
            <div class="h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -end-[16px] top-[40px] rounded-e-lg"></div>
            <div class="h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -end-[16px] top-[88px] rounded-e-lg"></div>
            <div class="rounded-[2rem] overflow-hidden h-[193px] w-[188px] rond">
              <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://lottie.host/4f920d50-4b07-4639-b416-5a5043a1069f/uSjVcT3KeL.json"
                style={{ width: " 320px" }}
              ></lottie-player>
            </div>
          </div>
          <div class="relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]"></div>
        </div>

        <div className="show-sec dark">
          {product.length > 0 ? (
            <ToDoList />
          ) : (
            <div
              class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <svg
                class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Danger</span>
              <div>
                <span class="font-medium">
                  There is no note to show please go back and add some note :
                </span>
                <ul class="mt-1.5 list-disc list-inside">
                  <li>
                    Add Note List From{" "}
                    <NavLink
                      to="/list"
                      className="inline-flex font-medium items-center text-blue-600 hover:underline"
                    >
                      (Here)
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ShowList;
