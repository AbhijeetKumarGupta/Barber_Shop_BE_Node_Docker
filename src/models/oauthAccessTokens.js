const { Model } = require("objection");
const knex = require("../../knex");
Model.knex(knex);
class OauthAccessTokens extends Model {
  static get tableName() {
    return "oauth_access_tokens";
  }

  static get idColumn() {
    return "id";
  }

  static get relationMappings() {
    return {};
  }
}

module.exports = OauthAccessTokens;
