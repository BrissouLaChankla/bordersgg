"use client";
import { useSearchParams } from "next/navigation";
import { CometCard } from "@/components/ui/comet-card";
import Image from "next/image";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Suspense } from "react";

function PreviewContent() {
  const { data: versions } = useSWR(
    "https://ddragon.leagueoflegends.com/api/versions.json",
    fetcher
  );

  const latestVersion = versions?.[0];
  const searchParams = useSearchParams();
  const data = Object.fromEntries(searchParams);

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <CometCard className="scale-90">
        <img
          src={`/assets/borders/${data.rank}.svg`}
          alt="border"
          className="absolute top-0 left-0 w-full h-full z-20 scale-125 translate-x-[1%] "
        />
        <div className="relative ">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data["champion.id"]}_${data["skin.num"]}.jpg`}
            alt={data["avatar.name"]}
            className="w-[308px] h-[560px] -translate-y-[2%] "
          />
          <img
            src={`/assets/layout.png`}
            alt="layout"
            width={640}
            height={263}
            className="absolute bottom-[2%] left-1/2 z-10 w-[92%] -translate-x-1/2"
          />

          <img
            src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/profileicon/${data["avatar.id"]}.png`}
            alt="Profile icon"
            width={128}
            height={128}
            className="absolute bottom-[6.2%] left-[49.55%] z-10 w-[17.5%] -translate-x-1/2 rounded-full"
          />

          <img
            src={`https://ddragon.leagueoflegends.com/cdn/10.10.5/img/spell/${data["summonerSpell.d"]}.png`}
            alt="D summoner spell"
            width={40}
            height={40}
            className="absolute  bottom-[8.4%] left-[73.55%] z-10 w-[9.3%] -translate-x-1/2 "
          />

          <img
            src={`https://ddragon.leagueoflegends.com/cdn/10.10.5/img/spell/${data["summonerSpell.f"]}.png`}
            alt="F summoner spell"
            width={40}
            height={40}
            className="absolute bottom-[8.4%] left-[85.6%] z-10 w-[9.3%] -translate-x-1/2 "
          />

          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/${data["runes.primary.icon"]}`}
            alt="Primary rune"
            width={50}
            height={50}
            className="absolute bottom-[7.9%] left-[15.4%] z-10 w-[10.3%] -translate-x-1/2 "
          />

          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/${data["runes.secondary.icon"]}`}
            alt="Secondary rune"
            width={50}
            height={50}
            className="absolute bottom-[8.1%] left-[23.5%] z-10 w-[6.5%] -translate-x-1/2 "
          />

          <span className="absolute bottom-[18%] left-1/2 -translate-x-1/2 text-xl text-white z-10  text-center w-10/12 font-beaufort text-[#FFF8E4]">
            {data["skin.name"] === "default"
              ? data["champion.name"]
              : data["skin.name"]}
          </span>

          <div className="absolute bottom-[18%] left-0 w-full h-[250px] pointer-events-none bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[18.5%] pointer-events-none bg-black"></div>
          <span className="absolute bottom-[0%] left-1/2 -translate-x-1/2 text-xl text-white z-10 text-center w-10/12 font-beaufort text-[#FFF8E4]">
            {data["summonerName"]}
          </span>
          <span className="absolute -bottom-[3%] text-[#BFBFBF] text-xs left-1/2 -translate-x-1/2 text-xl  z-10 text-center w-10/12 font-avenir">
            {data["title"]}
          </span>
        </div>
      </CometCard>
    </div>
  );
}

export default function Preview() {
  return (
    <Suspense
      fallback={
        <div className="bg-black h-screen flex items-center justify-center text-white">
          Chargement...
        </div>
      }
    >
      <PreviewContent />
    </Suspense>
  );
}
