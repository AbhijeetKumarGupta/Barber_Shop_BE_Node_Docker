const { Model } = require("objection")
const knex = require("../../knex");
Model.knex(knex);

class Users extends Model {
    static get tableName() {
      return "user";
    }
  
    static get idColumn() {
      return "id";
    }
  
    static get relationMappings() {
      const Business = require("./business");
      const UserBusinessRelation = require("./user_business_relation");
      return {
        Business: {
          relation: Model.HasOneThroughRelation,
          modelClass: Business,
          join: {
            from: `${this.tableName}.${idColumn}`,
            through: {
                from: `${UserBusinessRelation.tableName}.${userId}`,
                to: `${UserBusinessRelation.tableName}.${businessId}`,
            },
            to: `${Business.tableName}.${Business.businessId}`,
          },
        },
      };
    }
  }
  
module.exports = Users;