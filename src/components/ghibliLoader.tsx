export default function GhibliLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-50 to-green-100">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-green-700 font-bold text-lg animate-bounce">
            ✿
          </span>
        </div>
      </div>
    </div>
  );
}
