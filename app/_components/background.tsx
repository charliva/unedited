
export default function Background() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#f5f2ea]">
      {/* Grain overlay */}
      <div 
        className="fixed inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Gradient blur */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-30 blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #4ade80 0%, #fb7185 50%, #fb923c 100%)',
        }}
      />
    </div>
  )
}

