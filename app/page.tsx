import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <h1 className="text-4xl font-bold mb-8">チョイスバディ</h1>
        <Button className="bg-black text-white px-8 py-4 rounded-md">start</Button>
      </div>
    </>
  );
}
