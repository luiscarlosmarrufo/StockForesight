import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNav from '@/app/ui/dashboard/sidenav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex-col bg-bbb">
          <div className="w-full flex-none bg-orange-500">
            <SideNav />
          </div>
            {children}
        </div>
      </body>
    </html>
  );
}
