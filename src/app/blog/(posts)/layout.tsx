export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="prose dark:prose-invert min-w-full flex flex-col items-center">
      <div className="min-w-[500px] ">{children}</div>
    </div>
  );
}
