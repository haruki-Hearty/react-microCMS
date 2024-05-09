import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

export const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
