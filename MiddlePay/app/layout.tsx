import './globals.css';
import LocationBlock from '@/components/LocationBlock';

export const metadata = { title: 'MiddlePay' };
export default ({ children }: { children: React.ReactNode }) => (
  <html lang="id">
    <body className="bg-slate-950">
      <LocationBlock />
      {children}
    </body>
  </html>
);