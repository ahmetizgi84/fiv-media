import { Footer, Navbar } from '@/components';
import { ReactNode, FC } from 'react';

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
