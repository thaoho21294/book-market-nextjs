import React from "react";

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <>Your navbar here</>
      <main>{children}</main>
      <>Your footer here</>
    </>
  );
};

export default RootLayout;
