import React from "react";
import TelegramIcon from "../../../public/telegram-stroke-rounded (1)";
import InstagramIcon from "../../../public/instagram-stroke-rounded (1)";

function AboutMy() {
  return (
    <div className=" container m-auto max-w-[800px]  ">
      <div className=" text-center pt-32 ">
        <div>
          {" "}
          <span className=" text-2xl"> Phone</span>: +998 (97) 056 79 85
        </div>
        <div>
          <span className=" text-2xl"> Telegram</span>:{" "}
          <a href="https://t.me/Ozodbek_devolopr">Ozodbek..</a>
        </div>{" "}
      </div>
    </div>
  );
}

export default AboutMy;
