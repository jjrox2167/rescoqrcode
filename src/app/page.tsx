import Image from "next/image";
import { DownloadIntermediaSection } from "@/components/DownloadIntermediaSection";
import { Hero1 } from "@/components/hero1";
import { DownloadOfficeApps } from "@/components/DownloadOfficeApps";
import AppDownloadLanding from "@/components/AppDownloadLanding";


export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          
          <AppDownloadLanding />
       
        
        </div>
      </main>
    </div>
  );
}
