export default function StaffLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-64 bg-blue-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Staff Panel</h2>
        {/* Add staff navigation links here */}
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
