import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import * as React from 'react';

interface ILayoutProps {
    children: React.ReactNode
}

const Layout: React.FunctionComponent<ILayoutProps> = ({children}) => {
  return (
    <div className=''>
      {children}
    </div>
  );
};

export default Layout;
