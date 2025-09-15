import Navbar from '@/components/Navbar';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
