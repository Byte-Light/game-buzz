// data/ConsoleGamesData.ts
export type Game = {
    id: number;
    name: string;
    genre: string;
    rating: number;
    description: string;
  };
  
  export const games: Game[] = [
    { id: 1, name: 'The Last of Us Part II', genre: 'Action-Adventure', rating: 4.9, description: 'A gritty, emotional story-driven experience set in a post-apocalyptic world.' },
    { id: 2, name: 'God of War', genre: 'Action', rating: 4.8, description: 'An epic journey of Kratos and his son Atreus through Norse mythology.' },
    { id: 3, name: 'Spider-Man: Miles Morales', genre: 'Action', rating: 4.7, description: 'An open-world superhero adventure where you take on the role of Miles Morales.' },
    { id: 4, name: 'Ghost of Tsushima', genre: 'Action-Adventure', rating: 4.8, description: 'Explore feudal Japan as a samurai defending his homeland.' },
    { id: 5, name: 'Horizon Forbidden West', genre: 'RPG', rating: 4.6, description: 'A visually stunning open-world adventure in a post-apocalyptic setting.' },
    { id: 6, name: 'Ratchet & Clank: Rift Apart', genre: 'Platformer', rating: 4.5, description: 'A dimension-hopping adventure with action-packed gameplay.' },
    { id: 7, name: 'Uncharted 4: A Thief\'s End', genre: 'Action-Adventure', rating: 4.9, description: 'Follow Nathan Drake on his final adventure in search of pirate treasure.' },
    { id: 8, name: 'Red Dead Redemption 2', genre: 'Action', rating: 4.9, description: 'An immersive experience in the late 1800s American West.' },
    { id: 9, name: 'Bloodborne', genre: 'Action RPG', rating: 4.7, description: 'A gothic horror adventure in a nightmarish world.' },
    { id: 10, name: 'Persona 5', genre: 'JRPG', rating: 4.8, description: 'A unique story of high school students with supernatural powers.' },
    { id: 11, name: 'The Legend of Zelda: Breath of the Wild', genre: 'Adventure', rating: 4.9, description: 'A groundbreaking open-world adventure in Hyrule.' },
    { id: 12, name: 'Super Mario Odyssey', genre: 'Platformer', rating: 4.8, description: 'Join Mario on a world-spanning adventure to save Princess Peach.' },
    { id: 13, name: 'Dark Souls III', genre: 'Action RPG', rating: 4.6, description: 'A challenging and dark fantasy RPG.' },
    { id: 14, name: 'Monster Hunter: World', genre: 'RPG', rating: 4.5, description: 'Hunt massive creatures in diverse ecosystems.' },
    { id: 15, name: 'Sekiro: Shadows Die Twice', genre: 'Action', rating: 4.7, description: 'A difficult action game set in Sengoku-era Japan.' },
    { id: 16, name: 'Marvel\'s Spider-Man', genre: 'Action', rating: 4.8, description: 'Swing through New York City as Spider-Man.' },
    { id: 17, name: 'Death Stranding', genre: 'Adventure', rating: 4.5, description: 'A unique game about connecting isolated cities in a dystopian future.' },
    { id: 18, name: 'Final Fantasy VII Remake', genre: 'JRPG', rating: 4.7, description: 'A reimagining of the classic RPG with modern visuals and gameplay.' },
    { id: 19, name: 'Resident Evil 2', genre: 'Horror', rating: 4.6, description: 'A survival horror remake that delivers suspense and scares.' },
    { id: 20, name: 'FIFA 21', genre: 'Sports', rating: 4.3, description: 'Experience the world of soccer with realistic gameplay and graphics.' },
  ];
  