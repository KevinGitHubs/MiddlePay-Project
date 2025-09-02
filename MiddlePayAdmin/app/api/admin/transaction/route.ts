import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://clbpnluidkkrobwyowjt.supabase.co',
  process.env.SUPABASE_SERVICE_KEY!
);

export async function GET() {
  const { data } = await supabase
    .from('transactions')
    .select(`
      id,
      type,
      amount,
      status,
      created_at,
      profiles!inner(email, name)
    `)
    .order('created_at', { ascending: false });
  return NextResponse.json(data || []);
}
