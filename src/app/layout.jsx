import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { AuthProvider } from '@/pages/api/AuthContext';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className="bg-slate-800 text-gray-100">
        <AuthProvider>
          <Header />
          <main className="h-screen">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
