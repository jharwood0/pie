const czConfig = require('./.cz-config.js');

module.exports = {
  extends: ['@commitlint/config-conventional'],
  "rules": {
    "type-enum": [2, "always", czConfig.types.map(t => t.value)],
    "scope-enum": [2, "always", czConfig.scopes],
  }
}