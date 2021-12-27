const {Sequelize} = require('sequelize')

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT, DATABASE_URL} = process.env

let sequlize;

if(process.env.NODE_ENV === 'production') {
    sequlize = new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        logging: false,
        ssl: true,
        dialectOptions: {
            sel: {
                require: true,
                rejectUnauthorized: false
            }
        }
    })
}else{
    const sequlize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
        dialect: 'postgres',
        host: DB_HOST,
        port: DB_PORT,
    })

}

module.exports = sequlize;