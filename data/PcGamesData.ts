// data/PcGamesData.ts

export type Game = {
    id: number;
    name: string;
    genre: string;
    rating: number;
    description: string;
  };
  
  export const games: Game[] = [
    { id: 1, name: 'Cyberpunk 2077', genre: 'Action RPG', rating: 4.5, description: 'An open-world, action-adventure story set in Night City.' },
    { id: 2, name: 'The Witcher 3: Wild Hunt', genre: 'RPG', rating: 4.9, description: 'A story-driven, open-world RPG set in a visually stunning fantasy universe.' },
    { id: 3, name: 'Minecraft', genre: 'Sandbox', rating: 4.8, description: 'A game about placing blocks and going on adventures.' },
    { id: 4, name: 'Red Dead Redemption 2', genre: 'Action-Adventure', rating: 4.7, description: 'An epic tale of life in America’s unforgiving heartland.' },
    { id: 5, name: 'DOOM Eternal', genre: 'Shooter', rating: 4.6, description: 'Battle across dimensions to save humanity from extinction.' },
    { id: 6, name: 'Assassin’s Creed Valhalla', genre: 'Action RPG', rating: 4.4, description: 'Become a legendary Viking on a quest for glory in England.' },
    { id: 7, name: 'Valorant', genre: 'Shooter', rating: 4.3, description: 'A character-based tactical shooter focused on strategy and precision.' },
    { id: 8, name: 'Apex Legends', genre: 'Battle Royale', rating: 4.5, description: 'A fast-paced battle royale with unique characters and abilities.' },
    { id: 9, name: 'Fortnite', genre: 'Battle Royale', rating: 4.2, description: 'A multiplayer game where players fight to be the last one standing.' },
    { id: 10, name: 'League of Legends', genre: 'MOBA', rating: 4.1, description: 'A strategic team-based game where players battle for control of the map.' },
    { id: 11, name: 'Among Us', genre: 'Party', rating: 4.0, description: 'A multiplayer game of teamwork and betrayal aboard a spaceship.' },
    { id: 12, name: 'Call of Duty: Warzone', genre: 'Battle Royale', rating: 4.3, description: 'A free-to-play battle royale set in the Call of Duty universe.' },
    { id: 13, name: 'Hades', genre: 'Roguelike', rating: 4.8, description: 'A rogue-like dungeon crawler based on Greek mythology.' },
    { id: 14, name: 'Resident Evil Village', genre: 'Survival Horror', rating: 4.6, description: 'A terrifying survival horror experience in a mysterious village.' },
    { id: 15, name: 'FIFA 23', genre: 'Sports', rating: 4.4, description: 'The latest installment in the popular soccer simulation series.' },
    { id: 16, name: 'Forza Horizon 5', genre: 'Racing', rating: 4.9, description: 'An open-world racing game set in beautiful and diverse landscapes.' },
    { id: 17, name: 'Genshin Impact', genre: 'Action RPG', rating: 4.6, description: 'An open-world action RPG with elemental combat and exploration.' },
    { id: 18, name: 'Halo Infinite', genre: 'Shooter', rating: 4.4, description: 'A first-person shooter with a compelling story and multiplayer mode.' },
    { id: 19, name: 'Terraria', genre: 'Sandbox', rating: 4.5, description: 'A sandbox adventure game with crafting, exploration, and combat.' },
    { id: 20, name: 'Overwatch', genre: 'Shooter', rating: 4.2, description: 'A team-based shooter with unique heroes and intense gameplay.' },
  ];
  