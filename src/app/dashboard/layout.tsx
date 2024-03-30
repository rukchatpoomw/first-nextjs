export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <section>{children}</section>
      <div>Dashboard layout</div>
    </div>
  );
}
