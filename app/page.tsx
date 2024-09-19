import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen bg-bbb flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-orange-500 p-4 md:h-30">
        <AcmeLogo />
      </div>
      <div className="flex grow flex-col md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg md:w-2/5">
          <p className={`text-xl text-white md:text-3xl md:leading-normal`}>
            Welcome to Foresight, a new virtual financial assistant.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-orange-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}
