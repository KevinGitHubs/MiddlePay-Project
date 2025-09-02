'use client';
import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ onSearch }: { onSearch: (q: string) => void }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="TRX-2024... atau email user"
          className="w-full bg-slate-800 text-white pl-10 pr-4 py-3 rounded-xl border border-slate-700"
        />
        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 px-3 py-1 rounded text-sm">
          Cari
        </button>
      </div>
    </form>
  );
}