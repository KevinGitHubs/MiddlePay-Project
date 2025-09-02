import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://clbpnluidkkrobwyowjt.supabase.co',
  process.env.SUPABASE_SERVICE_KEY!
);

export async function GET() {
  const { data } = await supabase
    .from('profiles')
    .select('id, email, name, role, last_sign_in_at, ip_address, location, is_vpn');
  return NextResponse.json(data || []);
}