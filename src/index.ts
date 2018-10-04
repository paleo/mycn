import { LadcAdapter } from "ladc"
import sqlite3 from "sqlite3"
import { toBasicDatabaseConnection } from "./BasicDatabaseConnection"
import { Sqlite3ConnectionOptions } from "./exported-definitions"
import { createSqlite3Connection } from "./promisifySqlite3"

export default function sqlite3Adapter(options: Sqlite3ConnectionOptions): LadcAdapter {
  if (options.verbose)
    sqlite3.verbose()
  return {
    createConnection: async () => {
      let db = await createSqlite3Connection(options)
      return toBasicDatabaseConnection(db)
    }
  }
}

export * from "./exported-definitions"