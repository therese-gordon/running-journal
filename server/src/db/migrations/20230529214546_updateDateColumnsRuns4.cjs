/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.alterTable("newRuns", (table) => {
        table.string("day")
        table.string("year")
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.alterTable("newRuns", (table) => {
        table.dropColumn("day")
        table.dropColumn("year")
    })
}

