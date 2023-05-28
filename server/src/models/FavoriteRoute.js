const Model = require("./Model")

class FavoriteRoute extends Model {
    static get tableName() {
        return "favoriteRoutes"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["name", "distance"],
            properties: {
                name: { type: "string"},
                distance: { type: "string"},
            }
        }
    }

    static get relationMappings() {
        const User = require("./User")

        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "favoriteRoutes.userId",
                    to: "users.id"
                }
            }
        }
    }
}

module.exports = FavoriteRoute