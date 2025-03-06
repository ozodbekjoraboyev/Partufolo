import React from "react";
function Projekts() {
  return (
    <>
      <div className=" container m-auto max-w-[800px] ">
        <div className=" pt-10 gap-5 flex justify-center">
          <div className=" w-52 h-32 p-5  rounded-md  bg-yellow-400">
            <a
              className=" flex justify-center pt-6"
              href="https://texnomart-sivu.vercel.app/"
            >
              <img
                src="https://texnomart.uz/_nuxt/img/texnomart-logo.3b2791c.svg"
                alt=""
              />
            </a>
          </div>
          <div className="w-52 h-32 p-5  rounded-md  bg-white flex">
            <a
              className=" flex items-center justify-center gap-3"
              href="https://olcha01-30-2025.vercel.app/"
            >
              <img
                width={50}
                src="https://olcha.uz/eco-products/eco-products-logo.svg"
                alt=""
              />
              <img
                className=" w-32"
                src="https://olcha.uz/_nuxt/plus.lRzD4Jf7.png"
                alt=""
              />
            </a>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Projekts;
