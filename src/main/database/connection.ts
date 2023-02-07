import Knex from 'knex'

export const knex = Knex({
    client: 'better-sqlite3', // or 'better-sqlite3'
    connection: {
        filename: "./mydb.db"
    },
    useNullAsDefault: true
});