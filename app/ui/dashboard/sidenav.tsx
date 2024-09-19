import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';

export default function SideNav() {
  return (
    <div className="flex flex-row items-center justify-between px-3 py-0 bg-orange-500 md:px-6 md:py-4">
      <Link href="/">
        <div className="w-32 -mt-7 text-white md:w-40 md:mt-0">
          <AcmeLogo />
        </div>
      </Link>
      <NavLinks />
    </div>
  );
}
