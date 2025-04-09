export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="prose dark:prose-invert min-w-full flex flex-col items-center sm:px-[20px] md:px-[20px]">
      <div className="min-w-[400px] mt-[32px]">{children}</div>
    </div>
  );
}
