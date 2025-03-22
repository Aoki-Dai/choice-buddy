export default function Choices() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-8">何に困っている？</h1>
      <div className="flex flex-col gap-4">
        <button className="px-7 py-4 bg-black text-white rounded">旅行プラン</button>
        <button className="px-7 py-4 bg-black text-white rounded">今日のご飯</button>
        <button className="px-7 py-4 bg-black text-white rounded">見たい作品</button>
        <button className="px-7 py-4 bg-black text-white rounded">恋愛</button>
        <button className="px-7 py-4 bg-black text-white rounded">ギフト選び</button>
        <button className="px-7 py-4 bg-black text-white rounded">その他</button>
      </div>
    </div>
  );
}