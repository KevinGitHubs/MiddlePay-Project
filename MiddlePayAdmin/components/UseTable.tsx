'use client';
export default function UserTable({ data }: { data: any[] }) {
  if (data.length === 0) return <p className="text-gray-400">Tidak ada data.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-slate-800 rounded-xl">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-gray-300">ID / Email</th>
            <th className="px-4 py-2 text-left text-gray-300">IP & Lokasi</th>
            <th className="px-4 py-2 text-left text-gray-300">Role</th>
            <th className="px-4 py-2 text-left text-gray-300">VPN</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-t border-slate-700">
              <td className="px-4 py-2 text-white">{row.id || row.email}</td>
              <td className="px-4 py-2 text-sm text-gray-300">
                {row.ip_address} <br /> {row.location}
              </td>
              <td className="px-4 py-2">
                <span className={`px-2 py-1 rounded text-xs ${row.role === 'admin' ? 'bg-purple-600' : 'bg-green-600'}`}>
                  {row.role}
                </span>
              </td>
              <td className="px-4 py-2">{row.is_vpn ? '✅' : '❌'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}