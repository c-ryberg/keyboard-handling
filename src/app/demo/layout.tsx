import { Metadata } from "next";

import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: "E-commerce Demo Site",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {children}
    </div>
  );
}
