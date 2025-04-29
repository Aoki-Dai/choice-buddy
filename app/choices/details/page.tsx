import { ThemeSwitcher } from "@/components/theme-switcher";

export default function ChoiceDetails() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>
      
      <div className="w-full max-w-md">
        <div className="bg-muted p-4 mb-6 rounded-md">
          <h1 className="text-xl">〇〇について</h1>
        </div>
        
        <div className="bg-muted p-4 mb-6 rounded-md">
          <p className="text-lg">本文本文本文本文</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-primary text-primary-foreground p-4 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
            <button className="w-full h-full">Button</button>
          </div>
          <div className="bg-primary text-primary-foreground p-4 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
            <button className="w-full h-full">Button</button>
          </div>
          <div className="bg-primary text-primary-foreground p-4 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
            <button className="w-full h-full">Button</button>
          </div>
          <div className="bg-primary text-primary-foreground p-4 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
            <button className="w-full h-full">Button</button>
          </div>
        </div>
        
        <div className="bg-muted p-4 rounded-md">
          <p className="text-center">ここに自由かけるように</p>
        </div>
      </div>
    </div>
  );
}