"use client"

import { Download, Monitor, Smartphone, Tablet } from "lucide-react";
import  androidicon  from "@/public/androidicon.svg"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface DownloadOfficeAppsProps {
  heading?: string;
  description?: string;

  platforms?: {
    desktop?: {
      title: string;
      subtitle: string;
      description: string;
      buttonText: string;
      url: string;
    };
    ios?: {
      title: string;
      subtitle: string;
      description: string;
      url: string;
    };
    android?: {
      title: string;
      subtitle: string;
      description: string;
      url: string;
    };
  };
}

const DownloadOfficeApps = ({
  heading = "Download Intermedia Unite",
  description = "The Unite Desktop and Mobile Apps let you chat, meet, call, and more, from anywhere. Transform your devices into powerful communications tools..",

  platforms = {
    desktop: {
      title: "Desktop",
      subtitle: "PC/Mac",
      description:
        "Use Intermedia Unite on your Desktop PC/Mac.",
      buttonText: "Download",
      url: "https://www.intermedia.com/assets/apps/intermedia-unite.exe",
    },
    ios: {
      title: "iPhone Mobile Phone",
      subtitle: "iOS",
      description:
        "The Unite Mobile App transforms your mobile phone into an essential collaboration tool, making teamwork on the go easier than ever. Place and receive calls, see who is available, chat with colleagues, host or join meetings, and manage voicemails, all from one application — any time, anywhere.",
      url: "https://apps.apple.com/us/app/intermedia-unite/id1127355812",
    },
    android: {
      title: "Android Mobile Phone",
      subtitle: "Android",
      description:
        "The Unite Mobile App transforms your mobile phone into an essential collaboration tool, making teamwork on the go easier than ever. Place and receive calls, see who is available, chat with colleagues, host or join meetings, and manage voicemails, all from one application — any time, anywhere.",
      url: "https://play.google.com/store/apps/details?id=net.intermedia.mobile_callscape&referrer=utm_source%3Duniteapps%26utm_medium%3Dsite",
    },
  },
}: DownloadOfficeAppsProps) => {
  return (
    <section className="bg- py-32">
      <div className="container">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-slate-50">
            {heading}
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg text-slate-50">
            {description}
          </p>
        </div>

        {/* Download Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {/* Desktop Card */}
          <Card className="bg-slate-50 shadow-lg text-foreground flex flex-col p-6">
            <div className="bg-foreground/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
              <Monitor className="h-6 w-6" />
            </div>
            <div className="mb-4 flex-1">
              <p className="mb-1 text-sm">{platforms.desktop?.title}</p>
              <h3 className="mb-3 text-2xl font-bold">
                {platforms.desktop?.subtitle}
              </h3>
              <p className="text-sm leading-relaxed">
                {platforms.desktop?.description}
              </p>
            </div>
            <div>
              <Button className="w-auto bg-blue-500 shadow-md" size="lg" asChild>
                <a href={platforms.desktop?.url} className="text-slate-50">
                  <Download className="h-4 w-4 text-slate-50" />
                  {platforms.desktop?.buttonText}
                </a>
              </Button>
            </div>
          </Card>

          {/* iOS Card */}
          <Card className="bg-slate-50 flex flex-col p-6 shadow-xl">
            <div className="bg-muted mb-4 flex h-12 w-12 items-center justify-center rounded-full">
              <Image
                src="/Apple_logo_black.svg"
                alt="Apple Logo"
                width={30}
                height={30}
              />
            </div>
            <div className="mb-6 flex-1">
              <p className="text-muted-foreground mb-1 text-sm">
                {platforms.ios?.title}
              </p>
              <h3 className="mb-3 text-2xl font-bold">
                {platforms.ios?.subtitle}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {platforms.ios?.description}
              </p>
            </div>
            <div>
              <a href={platforms.ios?.url}>
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/appstore.png"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </a>
            </div>
          </Card>

          {/* Android Card */}
          <Card className="bg-slate-50 border-border flex flex-col p-6">
            <div className="bg-muted mb-4 flex h-12 w-12 items-center justify-center rounded-full">
              <Image
                src="/androidicon.svg"
                alt="Android"
                width={50}
                height={50}
                />
              
            </div>
            <div className="mb-6 flex-1">
              <p className="text-muted-foreground mb-1 text-sm">
                {platforms.android?.title}
              </p>
              <h3 className="mb-3 text-2xl font-bold">
                {platforms.android?.subtitle}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {platforms.android?.description}
              </p>
            </div>
            <div>
              <a href={platforms.android?.url}>
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/googleplay.png"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { DownloadOfficeApps };
