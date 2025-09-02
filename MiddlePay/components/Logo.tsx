export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="8" width="36" height="24" rx="4" fill="#8B5CF6"/>
        <path d="M20 12L25 16L20 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 12L7 16L12 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <span className="text-2xl font-bold text-white">MiddlePay</span>
    </div>
  );
}