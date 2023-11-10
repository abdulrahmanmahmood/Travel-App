// components/Navbar.tsx
import { useClient } from 'next/client';
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  const { useState } = useClient();
  const [isListVisible, setListVisibility] = useState(false);

  const toggleListVisibility = () => {
    setListVisibility(!isListVisible);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={28} />
      </Link>
      <ul className={`h-full gap-12 lg:flex ${isListVisible ? 'block' : 'hidden'}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            <Link href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
      </div>
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleListVisibility}
      />
    </nav>
  );
};

export default Navbar;
