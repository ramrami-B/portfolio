import React from "react";

interface Props {
  children: JSX.Element;
}

const PageLayout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <header>header</header>
      {children}
    </React.Fragment>
  );
};

export default PageLayout;
