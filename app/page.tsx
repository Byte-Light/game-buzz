import ConsoleGames from "@/components/console-game/ConsoleGames";
import PcGames from "@/components/pc-game/PcGames";
import SmartphoneGames from "@/components/smartphone-game/SmartphoneGames";

export default function Home() {
  return (
    <div>
      <PcGames />
      <SmartphoneGames />
      <ConsoleGames />
    </div>
  );
}
