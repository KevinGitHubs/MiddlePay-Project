'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function JoinRoomPage() {
  const [roomCode, setRoomCode] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');

  const handleUpload = async () => {
    if (!file || !roomCode || !password) return alert('Lengkapi semua data');
    const form = new FormData();
    form.append('proof', file);
    form.append('roomCode', roomCode);
    form.append('password', password);
    const res = await fetch('/api/upload-proof', {
      method: 'POST',
      body: form,
    });
    const result = await res.json();
    alert(result.message);
  };

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Join Room – MiddlePay</h1>
      <div className="bg-slate-800 p-6 rounded-xl max-w-md space-y-4">
        <input
          placeholder="Room Code"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          className="w-full bg-slate-700 text-white px-4 py-2 rounded"
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-slate-700 text-white px-4 py-2 rounded"
        />
        <div className="bg-white p-4 rounded-lg">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=MiddlePayQR" alt="QRIS" className="w-full" />
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setFile(file);
              setPreview(URL.createObjectURL(file));
            }
          }}
          className="text-white"
        />
        {preview && <Image src={preview} alt="preview" width={300} height={200} className="rounded-xl" />}
        <button
          onClick={handleUpload}
          className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold"
        >
          Upload Bukti
        </button>
      </div>
    </div>
  );
}