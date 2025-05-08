import { ThemeSwitcher } from "@/components/theme-switcher";

export default function ChoiceDetails() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6">
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
        <ThemeSwitcher />
      </div>
      
      <div className="w-full max-w-md">
        <div className="bg-muted p-3 sm:p-4 mb-4 sm:mb-6 rounded-md">
          <h1 className="text-lg sm:text-xl">〇〇について</h1>
        </div>
        
        <div className="bg-muted p-3 sm:p-4 mb-4 sm:mb-6 rounded-md">
          <p className="text-base sm:text-lg">本文本文本文本文</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-primary text-primary-foreground p-3 sm:p-4 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
            <button className="w-full h-full py-2">Button</button>
          </div>
          <div className="bg-primary text-primary-foreground p-3 sm:p-4 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
            <button className="w-full h-full py-2">Button</button>
          </div>
          <div className="bg-primary text-primary-foreground p-3 sm:p-4 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
            <button className="w-full h-full py-2">Button</button>
          </div>
          <div className="bg-primary text-primary-foreground p-3 sm:p-4 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
            <button className="w-full h-full py-2">Button</button>
          </div>
        </div>
        
        <div className="bg-muted p-3 sm:p-4 rounded-md">
          <p className="text-center text-sm sm:text-base">ここに自由かけるように</p>
        </div>
      </div>
    </div>
  );
}