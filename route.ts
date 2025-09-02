import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://clbpnluidkkrobwyowjt.supabase.co',
  process.env.SUPABASE_SERVICE_KEY!
);

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q') || '';

  // Cari transaksi
  if (q.startsWith('TRX-')) {
    const { data } = await supabase.from('transactions').select('*').eq('id', q);
    return NextResponse.json(data || []);
  }

  // Cari user
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .or(`email.ilike.%${q}%,name.ilike.%${q}%`);
  return NextResponse.json(data || []);
}