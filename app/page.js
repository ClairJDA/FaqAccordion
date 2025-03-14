import QuestionItem from "@/components/questionItem";
import Image from "next/image";
import faqList from "../faqList.json";

export default function Home() {
  return (
    <div className="w-full h-full bg-light-pink font-work-sans">
      <div className="relative w-full h-1/3">
        <Image
          src="/images/background-pattern-desktop.svg"
          alt="background"
          fill
          className="hidden sm:block object-cover"
        />
        <Image
          src="/images/background-pattern-mobile.svg"
          alt="background"
          fill
          className="sm:hidden object-cover"
        />
      </div>
      <div className="w-xs md:w-md h-fit p-6 relative z-99 top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white">
        <div className="flex gap-3 py-4">
          <Image
            src="/images/icon-star.svg"
            alt="star"
            width={30}
            height={30}
            
          />
          <h1 className=" font-bold text-3xl">FAQs</h1>
        </div>
        {faqList.faq.map((faq, i) => (
          <QuestionItem question={faq.q} answer={faq.a} key={faq.q} i={i} />
        ))}
      </div>
    </div>
  );
}
