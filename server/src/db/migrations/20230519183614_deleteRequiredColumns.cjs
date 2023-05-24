/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.alterTable("users", (table) => {
        table.dropColumn("email")
        table.dropColumn("cryptedPassword")
    })        
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.alterTable("users", (table) => {
        table.string("email").notNullable().unique()
        table.string("cryptedPassword").notNullable()
    })
}
