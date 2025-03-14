import { FC, ReactNode } from 'react';
import ScrollProgressBar from './ScrollProgressBar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <main className="min-h-[calc(100vh-2.5rem)]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
