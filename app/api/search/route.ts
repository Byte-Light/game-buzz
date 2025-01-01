import { NextResponse } from 'next/server';
import mysql, { RowDataPacket } from 'mysql2/promise';

const dbConfig = {
  host: '82.197.82.55',
  user: 'u201082593_GameBuzzg',
  password: '2?cIlv^#',
  database: 'u201082593_gameBuzz',
};

export interface SearchResult {
  id: number;
  name: string;
  type: 'game' | 'accessory';
  key: string; // Unique key for React
  release_date?: string; // Optional for games
  category?: string;     // Optional for accessories
  price?: number;
  image?: string;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);

    // Search for games
    const [gameRows] = await connection.execute<RowDataPacket[]>(
      `SELECT id, game_name AS name, 'game' AS type, release_date, price, image
       FROM top_pc WHERE game_name LIKE ? LIMIT 5`,
      [`%${query}%`]
    );

    // Add unique keys
    const gamesWithKeys = gameRows.map((game) => ({
      ...game,
      key: `game-${game.id}`,
    }));

    // Search for accessories
    const [accessoryRows] = await connection.execute<RowDataPacket[]>(
      `SELECT id, accessory_name AS name, 'accessory' AS type, category, price, image
       FROM top_gacc WHERE accessory_name LIKE ? LIMIT 5`,
      [`%${query}%`]
    );

    // Add unique keys
    const accessoriesWithKeys = accessoryRows.map((accessory) => ({
      ...accessory,
      key: `accessory-${accessory.id}`,
    }));

    // Combine and return results
    const results: SearchResult[] = [
      ...(gamesWithKeys as SearchResult[]),
      ...(accessoriesWithKeys as SearchResult[]),
    ];

    return NextResponse.json(results);
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ error: 'Failed to load search results' }, { status: 500 });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
