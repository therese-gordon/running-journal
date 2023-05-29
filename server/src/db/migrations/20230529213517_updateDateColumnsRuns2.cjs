/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.alterTable("newRuns", (table) => {
        table.string("month")
        table.integer("day")
        table.integer("year")
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.alterTable("newRuns", (table) => {
        table.dropColumn("month")
        table.dropColumn("day")
        table.dropColumn("year")
    })
}
