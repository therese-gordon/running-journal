/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.alterTable("newRuns", (table) => {
        table.dropColumn("favoriteRoutesId")
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.alterTable("newRuns", (table) => {
        table.bigInteger("favoriteRoutesId").unsigned().notNullable().index().references("favoriteRoutes.id")
    })
}    