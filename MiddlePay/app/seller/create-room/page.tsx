'use client';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function CreateRoomPage() {
  const [room, setRoom] = useState<{
    code: string;
    password: string;
    nominal: number;
  } | null>(null);
  const [nominal, setNominal] = useState(0);

  const createRoom = () => {
    if (nominal <= 0) return alert('Nominal harus lebih dari 0');
    setRoom({
      code: uuid().slice(0, 8).toUpperCase(),
      password: uuid().slice(24, 30).toUpperCase(),
      nominal,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Buat Room – MiddlePay</h1>
      {!room ? (
        <div className="bg-slate-800 p-6 rounded-xl max-w-sm space-y-4">
          <label className="text-gray-300">Nominal yang harus dibayar</label>
          <input
            type="number"
            min={1000}
            step={1000}
            value={nominal}
            onChange={(e) => setNominal(Number(e.target.value))}
            className="w-full bg-slate-700 text-white px-3 py-2 rounded"
            placeholder="Rp 0"
          />
          <button
            onClick={createRoom}
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold"
          >
            Generate Room
          </button>
        </div>
      ) : (
        <div className="bg-slate-800 p-6 rounded-xl max-w-sm text-white space-y-3">
          <p><b>Room Code:</b> {room.code}</p>
          <p><b>Password:</b> {room.password}</p>
          <p><b>Nominal:</b> Rp {room.nominal.toLocaleString('id-ID')}</p>
          <button
            onClick={() => navigator.clipboard.writeText(room.code)}
            className="w-full bg-green-600 py-2 rounded"
          >
            Salin Room Code
          </button>
        </div>
      )}
    </div>
  );
}