import SummonerSearchInput from "../components/SummonerSearchInput";


export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-bold">LolStats</h1>
        <SummonerSearchInput/> 
      </div>
    </div>
  );
}
