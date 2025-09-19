import { ReactNode } from "react";
import { Header } from "../ui/navbar";
import Footer from "./Footer";
import ScrollToTop from "../ui/scroll-to-top";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;