import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="">
      <div className=" flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={28} />
        </Link>

        <ul className=" hidden md:flex md:flex-row flex-wrap gap-5 lg:gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
      </div>

      <ul className=" ml-3 sm:flex-row sm:gap-3 sm: items-center z-50 relative md:hidden w-full">
        <Link
          href="/"
          className="  inline-block  regular-12  text-gray-50   cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          home
        </Link>
        <Link
          href="/"
          className="mx-3 regular-10 inline-block  text-gray-50 w-[140px] cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          How Hilink Work?
        </Link>
        <Link
          href="/"
          className=" regular-12 inline-block  text-gray-50  cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
        Services
        </Link>
        <Link
          href="/"
          className="mx-3  regular-12 inline-block  text-gray-50  cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
        Pricing
        </Link>
        <Link
          href="/"
          className=" regular-12 inline-block mr-auto ml-auto text-gray-50   cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
        Contact Us
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
