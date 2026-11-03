"use client";
import { ChangeEvent, useState } from "react";

import { useRouter } from "next/navigation";

export default function SummonerSearchInput() {
    const router = useRouter();
    const [summonerGameTag, setSummonerGameTag] = useState("");
    const [error, setError] = useState<string | null>(null);

    function handleClick() {
        if(!validateSummonerGameTag(summonerGameTag)) {
            setError("Name must include # and the name and tag need to have 3 characters or more");
            return;
        }
        router.push("/summoner/" + encodeURIComponent(summonerGameTag));
        return;
    }

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setSummonerGameTag(e.target.value);
        setError(null);
    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex">
                    <input  onChange={(e) => handleOnChange(e)} placeholder="Summoner#EUW" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"/>
                    <button type="button" onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
                </div>
                <p>{error}</p>
            </div>
        </div>
    )
}

function validateSummonerGameTag(summonerGameTag: string): boolean {
    const splitedSummonerGameTag = summonerGameTag.split("#");
    if(splitedSummonerGameTag.length != 2) return false;
    if(splitedSummonerGameTag[0].length < 3) return false;
    if(splitedSummonerGameTag[1].length < 3) return false;
    return true;
}