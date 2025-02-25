import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Demo Site",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
