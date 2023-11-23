import * as React from "react";

export const HolyLayout: React.FC<{
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}> = ({ header, children, footer }) => {
  return (
    <main className="min-h-screen flex flex-col">
      {header ? <header className="bg-gray-200 p-4">{header}</header> : null}
      <div className="flex-grow">{children}</div>
      {footer ? <footer className="bg-gray-200 p-4">{footer}</footer> : null}
    </main>
  );
};
