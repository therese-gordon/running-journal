/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("newRuns", (table) => {
        table.bigIncrements("id")
        table.string("routeName")
        table.date("date")
        table.integer("hours")
        table.integer("minutes")
        table.integer("seconds")
        table.text("notes")
        table.bigInteger("userId").unsigned().notNullable().index().references("users.id")
        table.bigInteger("favoriteRoutesId").unsigned().notNullable().index().references("favoriteRoutes.id")
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("newRuns")
}
