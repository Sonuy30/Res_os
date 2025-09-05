export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        {/* Add admin navigation links here */}
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
