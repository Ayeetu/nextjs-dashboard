import SideNav from '@/app/ui/dashboard/sidenav';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:overflow:hidden flex h-screen flex-col md:flex-row">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
