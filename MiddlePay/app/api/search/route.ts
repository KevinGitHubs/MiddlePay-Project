import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q') || '';

  // Transaksi
  if (q.startsWith('TRX-')) {
    const { data } = await supabase.from('transactions').select('*').eq('id', q).single();
    return NextResponse.json(data ? [data] : []);
  }

  // User
  const { data } = await supabase
    .from('profiles')
    .select('id, email, name, role, last_sign_in_at, ip_address, location')
    .or(`email.ilike.%${q}%,name.ilike.%${q}%`);
  return NextResponse.json(data || []);
}
