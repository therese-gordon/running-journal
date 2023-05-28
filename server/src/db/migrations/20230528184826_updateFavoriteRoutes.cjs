/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.alterTable("favoriteRoutes", (table) => {
        table.dropColumn("distance")
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.alterTable("favoriteRoutes", (table) => {
        table.integer("distance")
    })
}
