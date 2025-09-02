'use client';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      router.push('/seller/create-room');
    } catch {
      alert('Login gagal');
    }
  };
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <button
        onClick={handleLogin}
        className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold"
      >
        Login dengan Google
      </button>
    </div>
  );
}