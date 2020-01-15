exports.configure = function(env) {
  return configs[env];
}

let configs = {
  "development": {
    "username": "root",
    "password": null,
    "database": "medBuddy",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL"
  }
}

// "username": "root",
// "password": null,
// "database": "database_production",
// "host": "127.0.0.1",
// "dialect": "mysql",
// "operatorsAliases": false,