

module.exports = {
  "development": {
    "username": "postgres",
    "password": "123",
    "database": "testinguserid",
    "host": "127.0.0.1",
    "dialect": "postgres",
  },
  "test": {
    "username": "postgres",
    "password": "12345",
    "database": "transmon_test",
    "port": 5000,
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

}
