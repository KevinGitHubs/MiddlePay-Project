'use client';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface Transaction {
  id: string;
  type: string;
  amount: number;
  status: string;
  date: string;
  ip: string;
  location: string;
}

export default function HistoryModal({ onClose }: { onClose: () => void }) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch('/api/history')
      .then(res => res.json())
      .then(setTransactions);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl p-6 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Histori Transaksi</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        {transactions.length === 0 ? (
          <p className="text-gray-400">Belum ada transaksi</p>
        ) : (
          <div className="space-y-3">
            {transactions.map(tx => (
              <div key={tx.id} className="bg-slate-700 rounded-lg p-4">
                <p className="text-white font-bold">{tx.id}</p>
                <p className="text-sm text-gray-300">{tx.type} - Rp {tx.amount.toLocaleString('id-ID')}</p>
                <p className="text-xs text-gray-400">{tx.date} • {tx.ip} • {tx.location}</p>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  tx.status === 'completed' ? 'bg-green-600' : 'bg-yellow-600'
                }`}>
                  {tx.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}