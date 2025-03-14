"use client";

import Image from "next/image";
import { useState } from "react";

function QuestionItem({ question, answer, i }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div tabIndex={i} onKeyDown={(e) => setIsOpen(!isOpen)}>
      <hr className={`text-grayish-purple/10 ${!i && "hidden"}`} />
      <div
        className="flex justify-between my-2 hover:cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        
      >
        <h2 className="work-sans-semibold text-dark-purple text-xs hover:text-fuchsia-700">
          {question}
        </h2>
        <Image
          src={isOpen ? "/images/icon-minus.svg" : "/images/icon-plus.svg"}
          alt="plus"
          width={25}
          height={25}
        />
      </div>

      <p
        className={`pb-3 text-xs text-grayish-purple ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {answer}
      </p>
    </div>
  );
}

export default QuestionItem;
