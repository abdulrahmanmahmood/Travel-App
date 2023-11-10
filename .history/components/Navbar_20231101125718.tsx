import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../constants/index";

const Navbar = () => {
  return (
    <nav
      className=" flexBetween max-container padding-container relative z-30 
    py-5"
    >
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={28} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))}
        </ul>
    </nav>
  );
};

export default Navbar;
