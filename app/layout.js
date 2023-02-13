import './globals.css';
import Navbar from '../components/ui/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <Navbar />
        </header>
        <main> {children}</main>
      </body>
    </html>
  );
}
