import ConsoleGames from "@/components/home/ConsoleGames";
import PcGames from "@/components/home/PcGames";
import SmartphoneGames from "@/components/home/SmartphoneGames";

export default function Home() {
  return (
    <div>
      <PcGames />
      <SmartphoneGames />
      <ConsoleGames />
    </div>
  );
}
