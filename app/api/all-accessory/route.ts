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

    // Fetch accessory data from all_gacc table
    const [rows] = await connection.execute(`
      SELECT 
        accessory_name AS name, 
        category, 
        brand, 
        price, 
        image, 
        description, 
        afflink 
      FROM all_gacc
    `);

    return NextResponse.json(rows);
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ error: 'Failed to load accessory data' }, { status: 500 });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
