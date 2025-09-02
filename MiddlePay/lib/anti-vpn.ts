export async function detectVPN(ip: string) {
  // Gratis: ipqualityscore.com API
  const res = await fetch(`https://ipqualityscore.com/api/json/ip/YOUR_API_KEY/${ip}`);
  const data = await res.json();
  return {
    is_vpn: data.vpn || false,
    is_proxy: data.proxy || false,
    is_tor: data.tor || false,
    location: `${data.city}, ${data.country}`,
  };
}
