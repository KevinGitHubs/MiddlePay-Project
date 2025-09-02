import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

// IP whitelist (ganti dengan IP kantor / VPN Anda)
const ADMIN_IP_WHITELIST = ['103.21.58.66', '127.0.0.1'];

export async function adminAuth(req: NextRequest) {
  // 1. Cek IP
  const clientIP =
    req.headers.get('cf-connecting-ip') ??
    req.headers.get('x-forwarded-for')?.split(',')[0] ??
    'unknown';

  if (!ADMIN_IP_WHITELIST.includes(clientIP)) {
    return NextResponse.json({ error: 'IP tidak diizinkan' }, { status: 403 });
  }

  // 2. Cek token (opsional) — contoh header Authorization Bearer <token>
  const token = req.headers.get('authorization')?.replace('Bearer ', '');
  if (!token) return NextResponse.json({ error: 'Token diperlukan' }, { status: 401 });

  const { data, error } = await supabase.auth.getUser(token);
  if (error) return NextResponse.json({ error: 'Token tidak valid' }, { status: 401 });

  // 3. Cek role admin
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', data.user.id)
    .single();

  if (!profile || profile.role !== 'admin') {
    return NextResponse.json({ error: 'Admin access denied' }, { status: 403 });
  }

  return NextResponse.next();
}