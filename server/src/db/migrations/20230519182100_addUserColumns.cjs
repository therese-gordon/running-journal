/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.alterTable("users", (table) => {
        table.bigInteger("stravaId")
        table.string("accessToken")
        table.string("firstname")
        table.string("lastname")
        table.string("username")
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.alterTable("users", (table) => {
        table.dropColumn("stravaId")
        table.dropColumn("accessToken")
        table.dropColumn("firstname")
        table.dropColumn("lastname")
        table.dropColumn("username")
    })
}
