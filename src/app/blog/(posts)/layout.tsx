export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="prose dark:prose-invert min-w-full flex flex-col items-center px-[40px] pb-[40px]">
      <div className="w-full min-w-[400px] max-w-[1000px] mt-[32px]">
        {children}
      </div>
    </div>
  );
}
