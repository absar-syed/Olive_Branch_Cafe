import "./globals.css";
import Header from "../app/components/header";
import AddBootstrap from "./AddBootstrap";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <AddBootstrap/>
        <main>{children}</main>
      </body>
    </html>
  );
}
