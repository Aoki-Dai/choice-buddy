import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Choices() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>
      
      <h1 className="text-2xl font-bold mb-8">何に困っている？</h1>
      <div className="flex flex-col gap-4">
        <Link href="/choices/details" className="w-full">
          <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">旅行プラン</button>
        </Link>
        <Link href="/choices/details" className="w-full">
          <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">今日のご飯</button>
        </Link>
        <Link href="/choices/details" className="w-full">
          <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">見たい作品</button>
        </Link>
        <Link href="/choices/details" className="w-full">
          <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">恋愛</button>
        </Link>
        <Link href="/choices/details" className="w-full">
          <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">ギフト選び</button>
        </Link>
        <Link href="/choices/details" className="w-full">
          <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">その他</button>
        </Link>
      </div>
    </div>
  );
}