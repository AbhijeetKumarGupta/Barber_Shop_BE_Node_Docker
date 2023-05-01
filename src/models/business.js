const { Model } = require("objection")
const knex = require("../../knex");
Model.knex(knex);

class Business extends Model {
    static get tableName() {
      return "business";
    }
  
    static get idColumn() {
      return "id";
    }
  
    static get relationMappings() {
      const User = require("./user");
      const UserBusinessRelation = require("./user_business_relation");
      return {
        User: {
          relation: Model.HasOneThroughRelation,
          modelClass: User,
          join: {
            from: `${this.tableName}.${idColumn}`,
            through: {
                from: `${UserBusinessRelation.tableName}.${businessId}`,
                to: `${UserBusinessRelation.tableName}.${userId}`,
            },
            to: `${User.tableName}.${User.userId}`,
          },
        },
      };
    }
  }
  
  module.exports = Business;