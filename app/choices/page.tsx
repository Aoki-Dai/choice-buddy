import Link from "next/link";

export default function Choices() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-2xl font-bold mb-8">何に困っている？</h1>
      <div className="flex flex-col gap-4">
        <Link href="/choices/details" className="w-full">
          <button className="w-full px-6 py-3 bg-black text-white rounded">旅行プラン</button>
        </Link>
        <Link href="/choices/details" className="w-full">
          <button className="w-full px-6 py-3 bg-black text-white rounded">今日のご飯</button>
        </Link>
        <Link href="/choices/details" className="w-full">
          <button className="w-full px-6 py-3 bg-black text-white rounded">見たい作品</button>
        </Link>
        <Link href="/choices/details" className="w-full">
          <button className="w-full px-6 py-3 bg-black text-white rounded">恋愛</button>
        </Link>
        <Link href="/choices/details" className="w-full">
          <button className="w-full px-6 py-3 bg-black text-white rounded">ギフト選び</button>
        </Link>
        <Link href="/choices/details" className="w-full">
          <button className="w-full px-6 py-3 bg-black text-white rounded">その他</button>
        </Link>
      </div>
    </div>
  );
}