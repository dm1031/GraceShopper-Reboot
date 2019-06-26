const Sequelize = require('sequelize')

// Create a new instance of the Sequelize constructor
// As an argument it takes the address of the database
// If there is an environment variable that has an associated provisioned db, it uses that
// Otherwise, it uses our local postgres db

module.exports = new Sequelize(
    process.env.DATABASE_URL || 'postgres://localhost/reboot_db',
    {
        logging: false
    }
)