/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.alterTable("newRuns", (table) => {
        table.dropColumn("day")
        table.dropColumn("year")
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.alterTable("newRuns", (table) => {
        table.integer("day")
        table.integer("year")
    })
}
