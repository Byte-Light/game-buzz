import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: '82.197.82.55',
  user: 'u201082593_GameBuzzg',
  password: '2?cIlv^#',
  database: 'u201082593_gameBuzz',
};

export async function GET() {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);

    // Select all relevant fields from the top_pc table
    const [rows] = await connection.execute(`
      SELECT id, game_name, release_date, developer, publisher, genre, platform, rating, price, image, description
      FROM top_pc
    `);

    return NextResponse.json(rows);
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ error: 'Failed to load games data' }, { status: 500 });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
