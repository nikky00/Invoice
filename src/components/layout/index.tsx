import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({children}: ILayout) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout;
