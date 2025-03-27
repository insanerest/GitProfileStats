import React from "react";

export default function PageWrapper({ children }){
  return <div className="max-w-screen-lg mx-auto p-4">{children}</div>;
};
