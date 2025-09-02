'use client';
import { useEffect, useState } from 'react';
import { MapPin, RefreshCw } from 'lucide-react';

export default function LocationBlock() {
  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
    ip: string;
    city: string;
    country: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadLocation = async () => {
    try {
      if (!navigator.geolocation) throw new Error('Browser tidak mendukung geolokasi');

      const pos = await new Promise<GeolocationPosition>((res, rej) =>
        navigator.geolocation.getCurrentPosition(res, rej, { enableHighAccuracy: true })
      );

      const ipRes = await fetch('https://api.ipify.org?format=json');
      const { ip } = await ipRes.json();

      const locRes = await fetch(`http://ip-api.com/json/${ip}?fields=status,city,country`);
      const loc = await locRes.json();

      setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude, ip, city: loc.city, country: loc.country });
    } catch {
      setError('Lokasi harus diaktifkan untuk melanjutkan.');
    }
  };

  useEffect(() => { loadLocation(); }, []);

  if (location) return null; // lokasi aktif, tidak blokir

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="bg-slate-800 p-6 rounded-xl max-w-sm text-center text-white">
        <MapPin className="mx-auto mb-4 w-12 h-12 text-red-400" />
        <h2 className="text-xl font-bold mb-2">Aktifkan Lokasi</h2>
        <p className="mb-4 text-gray-300">Untuk keamanan, izinkan akses lokasi di browser Anda.</p>
        <button onClick={loadLocation} className="flex items-center justify-center gap-2 bg-purple-600 px-4 py-2 rounded">
          <RefreshCw size={16} /> Coba Lagi
        </button>
      </div>
    </div>
  );
}