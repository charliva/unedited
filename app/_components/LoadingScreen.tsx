export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
    </div>
  );
}
