import "./globals.css";
import Header from "../app/components/header";
import Footer from "../app/components/footer";
import AddBootstrap from "./AddBootstrap";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header/>
        <AddBootstrap/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
