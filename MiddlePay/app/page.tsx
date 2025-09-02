'use client';
import { useState } from 'react';
import Logo from '@/components/Logo';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  const [results, setResults] = useState<any>([]);

  const handleSearch = async (q: string) => {
    const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
    setResults(await res.json());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 flex flex-col items-center justify-center text-white px-4">
      <Logo />
      <h1 className="text-5xl font-bold mb-4">MiddlePay</h1>
      <p className="text-xl mb-6">Transaksi aman tanpa penipuan</p>

      <SearchBar onSearch={handleSearch} />

      {results.length > 0 && (
        <div className="mt-6 bg-slate-800 rounded-xl p-4 w-full max-w-md">
          <h2 className="text-lg font-semibold mb-2">Hasil</h2>
          <pre className="text-sm text-gray-300">{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}

      <div className="flex gap-4 mt-8">
        <a href="/seller/create-room" className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700">Penjual</a>
        <a href="/buyer/join-room" className="bg-green-600 px-6 py-3 rounded-xl hover:bg-green-700">Pembeli</a>
      </div>
    </div>
  );
}