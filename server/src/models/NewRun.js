const Model = require("./Model")

class NewRun extends Model {
    static get tableName() {
        return "newRuns"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: [],
            properties: {
                routeName: { type: "string" },
                month: { type: "string" },
                day: { type: "string" },
                year: { type: "string" },
                notes: { type: "string", maxLength: 300 },
                hours: { type: ["integer", "string"] },
                minutes: { type: ["integer", "string"] },
                seconds: { type: ["integer", "string"] },
            }
        }
    }

    static get relationMappings() {
        const { FavoriteRoute, User } = require("./index.js")

        return {
            favoriteRoute: {
                relation: Model.BelongsToOneRelation,
                modelClass: FavoriteRoute,
                join: {
                    from: "newRuns.favoriteRouteId",
                    to: "favoriteRoutes.id"
                },
            },
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "newRuns.userId",
                    to: "users.id"
                }
            }
        }
    }
}

module.exports = NewRun