"use client";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailtochbanizaid05@gmail.com:">
          chbanizaid05@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form className="mt-10 flex flex-col">
        <input
          className="h-14 px-4 rounded-lg border-black"
          type="email"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border-black p-4"
          placeholder="Your message"
        />
        <button
          type="submit"
          className=" group flex items-center gap-2 justify-center h-[3rem] w-[8rem] outline-none bg-gray-900 text-white rounded-full transition-all"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:translate-y-1 focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950" />
        </button>
      </form>
    </motion.section>
  );
}
