import React, { ReactElement } from 'react';

interface LayoutProps {
  children: ReactElement;
}

const Container:React.FC<LayoutProps> = ({ children }) => {
  return (
    <section style={{ display: "flex", padding: "20px" }}
    >
      {children}
    </section>
  );
};

export default Container;