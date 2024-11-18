import type { Metadata } from "next";
import "@/app/elses/css/globals.css";

export const metadata: Metadata = {
  title: "Makermode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={
        "h-full overflow-auto overscroll-none [&>*]:font-mono [&>*]:text-black"
      }
    >
      <body className={`flex flex-col min-h-screen`}>
        <div className={"min-h-screen flex flex-col flex-grow"}>{children}</div>
      </body>
    </html>
  );
}
