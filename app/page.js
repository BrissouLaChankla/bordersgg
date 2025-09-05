"use client";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Image from "next/image";
import { useState, useEffect, useMemo, useRef } from "react";
import { CometCard } from "@/components/ui/comet-card";

export default function Home() {
  const [data, setData] = useState({
    summonerName: "1yanou",
    champion: { name: "Ahri", id: "Ahri" },
    skin: { name: "default", id: "default", num: 0 },
    avatar: { id: 588 },
    title: "",
    runes: {
      primary: {
        key: "ArcaneComet",
        name: "Arcane Comet",
        icon: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png",
      },
      secondary: {
        key: "Precision",
        name: "Precision",
        icon: "perk-images/Styles/7201_Precision.png",
      },
    },
    summonerSpell: { d: "SummonerFlash", f: "SummonerDot" },
    rank: "challenger",
    language: "en_US",
  });

  // Retrieve last version
  const { data: versions } = useSWR(
    "https://ddragon.leagueoflegends.com/api/versions.json",
    fetcher
  );

  const latestVersion = versions?.[0];

  return (
    <div className="max-w-7xl mx-auto md:px-4 ">
      {/* <div className="flex flex-col items-center py-10">
        <img
          src="/assets/logo.png"
          alt="logo"
          className="w-24"
          width={256}
          height={269}
        />
        <h1 className="text-2xl font-bold">Border configurator</h1>
      </div> */}
      <div className="grid grid-cols-12 md:mt-10 md:rounded-xl overflow-hidden">
        <div className="md:col-span-7 col-span-12 bg-black h-full flex items-center justify-center overflow-hidden min-h-[90vh] md:min-h-auto relative">
          <div className="scale-90 ">
            <CometCard>
              <img
                src={`/assets/borders/${data.rank}.svg`}
                alt="border"
                className="absolute top-0 left-0 w-full h-full z-20 scale-125 translate-x-[1%] "
              />
              <div className="relative ">
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.champion.id}_${data.skin.num}.jpg`}
                  alt={data.avatar.name}
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
                  src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/profileicon/${data.avatar.id}.png`}
                  alt="Profile icon"
                  width={128}
                  height={128}
                  className="absolute bottom-[6.2%] left-[49.55%] z-10 w-[17.5%] -translate-x-1/2 rounded-full"
                />

                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/10.10.5/img/spell/${data.summonerSpell.d}.png`}
                  alt="D summoner spell"
                  width={40}
                  height={40}
                  className="absolute  bottom-[8.4%] left-[73.55%] z-10 w-[9.3%] -translate-x-1/2 "
                />

                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/10.10.5/img/spell/${data.summonerSpell.f}.png`}
                  alt="F summoner spell"
                  width={40}
                  height={40}
                  className="absolute bottom-[8.4%] left-[85.6%] z-10 w-[9.3%] -translate-x-1/2 "
                />

                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/img/${data.runes.primary.icon}`}
                  alt="Primary rune"
                  width={50}
                  height={50}
                  className="absolute bottom-[7.9%] left-[15.4%] z-10 w-[10.3%] -translate-x-1/2 "
                />

                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/img/${data.runes.secondary.icon}`}
                  alt="Secondary rune"
                  width={32}
                  height={32}
                  className="absolute bottom-[8%] left-[23.5%] z-10 w-[6.5%] -translate-x-1/2 p-[3px]"
                />

                <span className="absolute bottom-[18%] left-1/2 -translate-x-1/2 text-xl text-white z-10  text-center w-10/12 font-beaufort text-[#FFF8E4]">
                  {data.skin.name === "default"
                    ? data.champion.name
                    : data.skin.name}
                </span>

                <div className="absolute bottom-[18%] left-0 w-full h-[250px] pointer-events-none bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-[18.5%] pointer-events-none bg-black"></div>
                <span className="absolute bottom-[0%] left-1/2 -translate-x-1/2 text-xl text-white z-10 text-center w-10/12 font-beaufort text-[#FFF8E4]">
                  {data.summonerName}
                </span>
                <span className="absolute -bottom-[3%] text-[#BFBFBF] text-xs left-1/2 -translate-x-1/2 text-xl  z-10 text-center w-10/12 font-avenir">
                  {data.title}
                </span>
              </div>
            </CometCard>
          </div>
          <div className="text-xs text-base-content/60 absolute bottom-2 left-2 w-full">
            <p>
              🧑‍💻 by{" "}
              <a
                href="https://brice-eliasse.com/en"
                target="_blank"
                className="text-primary hover:underline font-medium"
              >
                Brice
              </a>
            </p>
          </div>
        </div>
        <div className="md:col-span-5 col-span-12">
          <fieldset className="fieldset bg-base-300 border-base-300 border p-4 max-h-[94vh] overflow-y-auto">
            {/* <legend className="fieldset-legend">Customize your border</legend> */}
            <div className="flex gap-4 items-end mb-2">
              <div className="grow">
                <label className="label mb-1.5" htmlFor="summonerName">
                  <span className="label-text">
                    Summoner name <span className="text-red-500 ">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  className="input w-full"
                  id="summonerName"
                  maxLength={16}
                  value={data.summonerName}
                  onChange={(e) =>
                    setData({ ...data, summonerName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="flex gap-4">
                <AvatarSelect
                  latestVersion={latestVersion}
                  avatarSelected={data.avatar}
                  onChange={(avatar) => setData({ ...data, avatar: avatar })}
                  languageSelected={data.language}
                />
                <LanguageSelect
                  latestVersion={latestVersion}
                  languageSelected={data.language}
                  onChange={(language) =>
                    setData({ ...data, language: language })
                  }
                />
              </div>
            </div>
            <label className="label" htmlFor="champion">
              <span className="label-text">Champion</span>
            </label>
            <ChampionSelect
              champion={data.champion}
              latestVersion={latestVersion}
              onChange={(champion) =>
                setData({
                  ...data,
                  champion: champion,
                  skin: { name: "default", id: "default", num: 0 },
                })
              }
              languageSelected={data.language}
            />
            <label className="label">
              <span className="label-text -mb-1">Skin</span>
            </label>
            <SkinSelect
              champion={data.champion}
              latestVersion={latestVersion}
              skinSelected={data.skin}
              onChange={(skin) => setData({ ...data, skin: skin })}
              languageSelected={data.language}
            />
            <div className="grid grid-cols-2 gap-6 mb-2">
              <div>
                <label className="label mb-1.5 " htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  className="input w-full mb-2"
                  id="title"
                  value={data.title}
                  maxLength={24}
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                />
              </div>
              <div>
                <label className="label mb-1.5" htmlFor="rank">
                  Rank
                </label>
                <select
                  id="rank"
                  className="select w-full"
                  value={data.rank}
                  onChange={(e) => setData({ ...data, rank: e.target.value })}
                >
                  <option value="iron">Iron</option>
                  <option value="bronze">Bronze</option>
                  <option value="silver">Silver</option>
                  <option value="gold">Gold</option>
                  <option value="platinum">Platinum</option>
                  <option value="emerald">Emerald</option>
                  <option value="diamond">Diamond</option>
                  <option value="master">Master</option>
                  <option value="grandmaster">Grandmaster</option>
                  <option value="challenger">Challenger</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-2">
              <div>
                <label className="label mb-1.5">Runes</label>
                <div className="flex items-end">
                  <RuneSelect
                    latestVersion={latestVersion}
                    runeSelected={data.runes.primary}
                    type="primary"
                    onChange={(rune) =>
                      setData({
                        ...data,
                        runes: { ...data.runes, primary: rune },
                      })
                    }
                    languageSelected={data.language}
                  />
                  <RuneSecondarySelect
                    latestVersion={latestVersion}
                    runeSelected={data.runes.secondary}
                    languageSelected={data.language}
                    onChange={(rune) =>
                      setData({
                        ...data,
                        runes: { ...data.runes, secondary: rune },
                      })
                    }
                    type="secondary"
                  />
                </div>
              </div>
              <div>
                <label className="label mb-2">Summoner spells</label>
                <div className="flex gap-2">
                  <SummonerSpellSelect
                    letter="d"
                    latestVersion={latestVersion}
                    summonerSpellSelected={data.summonerSpell.d}
                    languageSelected={data.language}
                    onChange={(summonerSpell) =>
                      setData({
                        ...data,
                        summonerSpell: {
                          ...data.summonerSpell,
                          d: summonerSpell,
                        },
                      })
                    }
                  />
                  <SummonerSpellSelect
                    letter="f"
                    latestVersion={latestVersion}
                    summonerSpellSelected={data.summonerSpell.f}
                    languageSelected={data.language}
                    onChange={(summonerSpell) =>
                      setData({
                        ...data,
                        summonerSpell: {
                          ...data.summonerSpell,
                          f: summonerSpell,
                        },
                      })
                    }
                  />
                </div>
              </div>
            </div>
            {/* <label className="label">Additional comments</label>
            <textarea
              className="textarea h-20 w-full placeholder:text-xs"
              placeholder="Anything I should keep in mind ? "
              value={data.comments}
            ></textarea> */}
            <div className="flex gap-4 mt-4">
              <a
                href={`/preview?${new URLSearchParams(
                  flattenData(data)
                ).toString()}`}
                target="_blank"
                className="btn btn-primary btn-outline"
              >
                Preview Fullscreen
              </a>
              <a
                href={getProductUrl(data.rank)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary grow"
              >
                Order now (✿◠‿◠)
              </a>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

const getProductUrl = (rank) => {
  const rankToProduct = {
    iron: "https://borders.gg/products/iron",
    bronze: "https://borders.gg/products/bronze",
    silver: "https://borders.gg/products/silver",
    gold: "https://borders.gg/products/gold",
    platinum: "https://borders.gg/products/platinum",
    emerald: "https://borders.gg/products/emerald",
    diamond: "https://borders.gg/products/diamond",
    master: "https://borders.gg/products/master-summoner-frame",
    grandmaster: "https://borders.gg/products/grandmaster-summoner-frame",
    challenger: "https://borders.gg/products/challenger-summoner-frame-1", // Challenger redirige vers Emerald
  };

  return rankToProduct[rank];
};

const flattenData = (data, prefix = "", res = {}) => {
  for (const [key, value] of Object.entries(data)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      flattenData(value, newKey, res);
    } else {
      res[newKey] = value;
    }
  }
  return res;
};

const RuneSelect = ({
  latestVersion,
  onChange,
  runeSelected,
  type,
  languageSelected,
}) => {
  const { data: runesData } = useSWR(
    latestVersion
      ? `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/${languageSelected}/runesReforged.json`
      : null,
    fetcher
  );
  const dialogRef = useRef(null);

  const runes = useMemo(
    () =>
      (runesData ?? []).flatMap((s) =>
        Array.isArray(s?.slots?.[0]?.runes) ? s.slots[0].runes : []
      ),
    [runesData]
  );

  return (
    <div>
      <div
        className="relative group"
        onClick={() => dialogRef.current?.showModal()}
      >
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/${runeSelected.icon}`}
          alt={runeSelected.name}
          className={`cursor-pointer rounded ${
            type === "primary" ? "w-12 h-12" : "w-10 h-10"
          }`}
          width={64}
          height={64}
        />
        <span className="opacity-0 group-hover:opacity-100 bg-black/70 transition duration-200 w-full h-full rounded absolute right-0 top-0 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 absolute left-1/2 top-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </span>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box max-w-2xl p-6 bg-base-200 shadow-xl rounded-xl border border-base-300">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 max-h-[50vh] overflow-y-auto p-2">
            {runes.map((rune) => (
              <button
                key={rune.id}
                type="button"
                className={`flex flex-col items-center p-2 rounded-lg border-2 transition-all duration-200 hover:border-primary hover:scale-105 bg-base-100 shadow-md`}
                onClick={() => {
                  onChange?.(rune);
                  dialogRef.current?.close();
                }}
                title={rune.name}
              >
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`}
                  alt={rune.name}
                  width={64}
                  height={64}
                  className="rounded mb-1"
                  loading="lazy"
                />
                <span className="text-xs text-center text-base-content font-medium">
                  {rune.name}
                </span>
              </button>
            ))}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

const RuneSecondarySelect = ({
  latestVersion,
  onChange,
  runeSelected,
  type,
  languageSelected,
}) => {
  const { data: runes } = useSWR(
    latestVersion
      ? `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/${languageSelected}/runesReforged.json`
      : null,
    fetcher
  );
  const dialogRef = useRef(null);

  return (
    <div>
      <div
        className="relative group"
        onClick={() => dialogRef.current?.showModal()}
      >
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/${runeSelected.icon}`}
          alt={runeSelected.name}
          className={`cursor-pointer rounded w-9 h-9 p-1.5`}
          width={32}
          height={32}
        />
        <span className="opacity-0 group-hover:opacity-100 bg-black/70 transition duration-200 w-full h-full rounded absolute right-0 top-0 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 absolute left-1/2 top-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </span>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box max-w-2xl p-6 bg-base-200 shadow-xl rounded-xl border border-base-300">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 max-h-[50vh] overflow-y-auto p-2">
            {runes?.map((rune) => (
              <button
                key={rune.id}
                type="button"
                className={`flex cursor-pointer flex-col items-center px-2  py-4 rounded-lg border-2 transition-all duration-200 hover:border-primary hover:scale-105 bg-base-100 shadow-md`}
                onClick={() => {
                  onChange?.(rune);
                  dialogRef.current?.close();
                }}
                title={rune.name}
              >
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`}
                  alt={rune.name}
                  width={32}
                  height={32}
                  className="rounded mb-1"
                  loading="lazy"
                />
                <span className="text-xs text-center text-base-content font-medium">
                  {rune.name}
                </span>
              </button>
            ))}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

const SummonerSpellSelect = ({
  latestVersion,
  onChange,
  summonerSpellSelected,
  letter,
  languageSelected,
}) => {
  const { data: summonerSpellsData } = useSWR(
    latestVersion
      ? `https://ddragon.leagueoflegends.com/cdn/10.10.5/data/${languageSelected}/summoner.json`
      : null,
    fetcher
  );
  const dialogRef = useRef(null);

  const allSpells = Object.values(summonerSpellsData?.data ?? {});
  const seenNames = new Set();
  let summonerSpells = allSpells.filter((spell) => {
    if (seenNames.has(spell.name)) return false;
    seenNames.add(spell.name);
    return true;
  });

  // summonerSpells = summonerSpells.slice(0, -2);

  return (
    <div>
      <div
        className="relative group"
        onClick={() => dialogRef.current?.showModal()}
      >
        <kbd className="kbd uppercase kbd-xs absolute bottom-0 right-0 z-10 pointer-events-none">
          {letter}
        </kbd>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/10.10.5/img/spell/${summonerSpellSelected}.png`}
          alt={summonerSpellSelected}
          className="cursor-pointer rounded"
          onClick={() => {}}
          width={40}
          height={40}
        />
        <span className="opacity-0 group-hover:opacity-100 bg-black/70 transition duration-200 w-full h-full rounded absolute right-0 top-0 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 absolute left-1/2 top-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </span>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box max-w-2xl p-6 bg-base-200 shadow-xl rounded-xl border border-base-300">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 max-h-[50vh] overflow-y-auto p-2">
            {summonerSpells.map((summonerSpell) => (
              <button
                key={summonerSpell.id}
                type="button"
                className={`flex flex-col items-center p-2 rounded-lg border-2 transition-all duration-200 hover:border-primary hover:scale-105 bg-base-100 shadow-md ${
                  summonerSpellSelected === summonerSpell.id
                    ? "border-primary ring-2 ring-primary"
                    : "border-transparent"
                }`}
                onClick={() => {
                  onChange?.(summonerSpell.id);
                  dialogRef.current?.close();
                }}
                title={summonerSpell.name}
              >
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/10.10.5/img/spell/${summonerSpell.id}.png`}
                  alt={summonerSpell.name}
                  width={64}
                  height={64}
                  className="rounded mb-1"
                  loading="lazy"
                />
                <span className="text-xs text-center text-base-content font-medium">
                  {summonerSpell.name}
                </span>
              </button>
            ))}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

const LanguageSelect = ({ languageSelected, onChange }) => {
  const { data: languages } = useSWR(
    "https://ddragon.leagueoflegends.com/cdn/languages.json",
    fetcher
  );
  const dialogRef = useRef(null);
  return (
    <div>
      <div
        className="relative group w-[56px]"
        onClick={() => dialogRef.current?.showModal()}
      >
        <img
          src={`/assets/flags/${languageSelected
            .split("_")[1]
            .toLowerCase()}.svg`}
          alt={languageSelected}
          className="cursor-pointer rounded ring-2 ring-gray-600"
          onClick={() => {}}
          width={56}
          height={56}
        />
        <span className="opacity-0 group-hover:opacity-100 bg-black/70 transition duration-200 w-full h-full rounded absolute right-0 top-0 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 absolute left-1/2 top-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </span>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box max-w-2xl p-6 bg-base-200 shadow-xl rounded-xl border border-base-300">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 max-h-[50vh] overflow-y-auto p-2">
            {languages?.map((language) => (
              <button
                key={language}
                type="button"
                className={`flex flex-col items-center p-2 rounded-lg border-2 transition-all duration-200 hover:border-primary hover:scale-105 bg-base-100 shadow-md ${
                  languageSelected === language
                    ? "border-primary ring-2 ring-primary"
                    : "border-transparent"
                }`}
                onClick={() => {
                  onChange?.(language);
                  dialogRef.current?.close();
                }}
                title={language}
              >
                <img
                  src={`/assets/flags/${language
                    .split("_")[1]
                    .toLowerCase()}.svg`}
                  alt={language}
                  width={64}
                  height={64}
                  className="rounded mb-1"
                  loading="lazy"
                />
                <span className="text-xs text-center text-base-content font-medium mt-1">
                  {language.split("_")[1]}
                </span>
              </button>
            ))}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

const ChampionSelect = ({
  latestVersion,
  onChange,
  champion,
  languageSelected,
}) => {
  // Retrieve champions
  const { data: championsData } = useSWR(
    latestVersion
      ? `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/${languageSelected}/champion.json`
      : null,
    fetcher
  );
  const champions = Object.values(championsData?.data ?? {});
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredChampions = champions.filter((champion) =>
    champion.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative mb-2">
      <input
        id="champion"
        type="text"
        placeholder={champion.name}
        className="input  w-full placeholder:text-base-content"
        role="combobox"
        aria-expanded={dropdownOpen}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => {
          setTimeout(() => setDropdownOpen(false), 200);
        }}
      />
      <img
        alt={champion.name}
        src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.id}.png`}
        width={24}
        height={24}
        className="absolute right-2 top-1/2 -translate-y-1/2"
      />
      {dropdownOpen && (
        <div className="bg-base-100 rounded-box w-56 max-h-64 overflow-auto mt-2 z-10 w-full absolute shadow-lg border border-base-200">
          {filteredChampions.map((champion) => (
            <button
              key={champion.id}
              role="option"
              className="btn btn-ghost w-full flex justify-start items-center p-1   "
              onClick={() => {
                onChange(champion);
                setDropdownOpen(false);
                setSearch("");
              }}
            >
              <div className="avatar">
                <div className="w-8">
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.id}.png`}
                    alt={champion.name}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <span>{champion.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const SkinSelect = ({
  latestVersion,
  onChange,
  champion,
  skinSelected,
  languageSelected,
}) => {
  // Retrieve champion data
  const { data: skinsData } = useSWR(
    latestVersion
      ? `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/${languageSelected}/champion/${champion.id}.json`
      : null,
    fetcher
  );
  const skins = skinsData?.data[champion.id].skins;

  return (
    <div className="overflow-x-auto -ms-2 p-2 flex flex-nowrap gap-3">
      {skins
        ? skins.map((skin) => (
            <div
              key={skin.id}
              className=" min-w-[100px] w-[100px] flex flex-col items-center gap-1 cursor-pointer group"
              onClick={() => onChange(skin)}
            >
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_${skin.num}.jpg`}
                alt={skin.name}
                width={308}
                height={560}
                className={`group-hover:scale-105 transition-all duration-200 ring-2 ${
                  skinSelected?.name === skin.name
                    ? "ring-primary/80 scale-105"
                    : "ring-transparent"
                } rounded-lg shadow-md`}
              />
              <span
                className={`text-xs mt-1.5 text-center max-w-28 transition-all duration-200 ${
                  skinSelected?.id === skin.id
                    ? "text-primary mt-2.5 font-bold"
                    : ""
                }`}
              >
                {skin.name === "default" ? champion.name : skin.name}
              </span>
            </div>
          ))
        : [0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="skeleton h-[223px] w-[100px]"></div>
          ))}
    </div>
  );
};

const AvatarSelect = ({
  latestVersion,
  onChange,
  avatarSelected,
  languageSelected,
}) => {
  const BATCH = 120;

  const { data, error, isLoading } = useSWR(
    latestVersion
      ? `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/${languageSelected}/profileicon.json`
      : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  // List of available icons (sorted by ascending id)
  const avatars = useMemo(() => {
    const raw = Object.values(data?.data ?? {});
    return raw.map((a) => ({ id: Number(a.id) })).sort((a, b) => a.id - b.id);
  }, [data]);

  const dialogRef = useRef(null);
  const scrollAreaRef = useRef(null);
  const sentinelRef = useRef(null);

  const [visibleCount, setVisibleCount] = useState(BATCH);

  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    if (!query) return avatars;
    const q = query.trim().toLowerCase();
    return avatars.filter((a) => String(a.id).includes(q));
  }, [avatars, query]);

  const visible = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  useEffect(() => {
    if (!sentinelRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisibleCount((c) => Math.min(c + BATCH, filtered.length));
        }
      },
      {
        root: scrollAreaRef.current || null,
        rootMargin: "400px",
        threshold: 0,
      }
    );
    io.observe(sentinelRef.current);
    return () => io.disconnect();
  }, [filtered.length]);

  // Reset on modal open/close
  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const handleClose = () => {
      setQuery("");
      setVisibleCount(BATCH);
    };
    dlg.addEventListener("close", handleClose);
    return () => dlg.removeEventListener("close", handleClose);
  }, []);

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  const handlePick = (avatar) => {
    onChange?.(avatar); // { id }
    closeModal();
  };

  return (
    <div>
      {/* Trigger: you can replace with <img> if you prefer */}
      <div className="relative group w-[56px]">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/profileicon/${
            avatarSelected.id || 588
          }.png`}
          alt="Choose an avatar"
          width={56}
          height={56}
          className="w-14 h-14 cursor-pointer rounded ring-2 ring-gray-600 aspect-square"
          onClick={openModal}
        />
        <span className="opacity-0 group-hover:opacity-100 bg-black/70 transition duration-200 w-full h-full rounded absolute right-0 top-0 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 absolute left-1/2 top-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </span>
      </div>
      <dialog ref={dialogRef} id="modal" className="modal">
        <div className="modal-box w-9/12  max-w-7xl p-4">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              aria-label="Close"
            >
              ✕
            </button>
          </form>

          <h3 className="font-semibold text-lg mb-3">Choose an icon</h3>

          {/* Toolbar: search */}
          <div className="mb-3 flex items-center gap-2">
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                // reset batch when search changes
                setVisibleCount(BATCH);
              }}
              type="text"
              placeholder="Search by ID…"
              className="input input-sm input-bordered w-full max-w-xs"
            />
            {isLoading && (
              <span className="loading loading-spinner loading-sm" />
            )}
            {error && (
              <span className="text-error text-sm">Error loading icons</span>
            )}
          </div>

          {/* Scrollable area */}
          <div
            ref={scrollAreaRef}
            className="mt-2 overflow-auto h-[70vh]"
            style={{ overscrollBehavior: "contain" }}
            role="list"
            aria-label="Profile icon selector"
          >
            {/* Responsive grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-4">
              {visible.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  className="p-0 bg-transparent border-0"
                  onClick={() => handlePick(a)}
                  role="listitem"
                  aria-label={`Icon ${a.id}`}
                  title={`#${a.id}`}
                >
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/profileicon/${a.id}.png`}
                    alt={`Avatar ${a.id}`}
                    width={64}
                    height={64}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer"
                  />
                </button>
              ))}
            </div>

            <div ref={sentinelRef} className="h-10" />

            {visibleCount >= filtered.length && filtered.length > 0 && (
              <div className="text-center text-sm opacity-60 py-4">
                All displayed
              </div>
            )}

            {!isLoading && filtered.length === 0 && (
              <div className="text-center text-sm opacity-60 py-8">
                No results
              </div>
            )}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
