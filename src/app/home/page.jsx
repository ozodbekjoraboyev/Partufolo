import Link from "next/link";
import React from "react";

function HomeComponents() {
  return (
    <div className="container m-auto max-w-[800px]">
      <p className="text-center pt-44 text-2xl cursor-pointer transition-all duration-300 hover:text-green-600 hover:scale-106">
        Salom, mening ismim Ozodbek
      </p>
      <p className="text-center text-2xl cursor-pointer transition-all duration-300 hover:text-green-600 hover:scale-106">Emir</p>
    </div>
  );
}

export default HomeComponents;
