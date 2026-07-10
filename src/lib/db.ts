import { neon } from '@neondatabase/serverless'

// Provides a raw SQL query executor connected to your Neon Postgres database.
// Usage: const rows = await sql`SELECT * FROM table`
export const sql = neon(process.env.DATABASE_URL!)

/**
 * Executes a SQL query with optional parameters.
 * Uses the Neon serverless driver for edge-compatible database access.
 */
export async function query<T = Record<string, unknown>>(
  strings: TemplateStringsArray,
  ...params: unknown[]
): Promise<T[]> {
  return (await sql(strings, ...params)) as T[]
}
