/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.alterTable("favoriteRoutes", (table) => {
        table.decimal("distance", 3, 2)
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.alterTable("favoriteRoutes", (table) => {
        table.dropColumn("distance")
    })
}
