const { Model } = require("objection")
const knex = require("../../knex");
Model.knex(knex);

class UsersBusinessRelation extends Model {
    static get tableName() {
      return "user_business_relation";
    }
  
    static get userId() {
      return "user_id";
    }

    static get businessId() {
      return "business_id";
    }
}
  
module.exports = UsersBusinessRelation;