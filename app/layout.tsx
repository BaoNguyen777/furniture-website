import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nội Thất LumiSpace",
  description:
    "Template website cửa hàng nội thất với nền tảng Next.js, sẵn sàng mở rộng tính năng AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
