export default function ChoiceDetails() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-md">
        <div className="bg-gray-200 p-4 mb-6">
          <h1 className="text-xl">〇〇について</h1>
        </div>
        
        <div className="bg-gray-200 p-4 mb-6">
          <p className="text-lg">本文本文本文本文</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800 text-white p-4 rounded-lg flex items-center justify-center">
            <button className="w-full h-full">Button</button>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded-lg flex items-center justify-center">
            <button className="w-full h-full">Button</button>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded-lg flex items-center justify-center">
            <button className="w-full h-full">Button</button>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded-lg flex items-center justify-center">
            <button className="w-full h-full">Button</button>
          </div>
        </div>
        
        <div className="bg-gray-200 p-4">
          <p className="text-center">ここに自由かけるように</p>
        </div>
      </div>
    </div>
  );
}