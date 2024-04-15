import { Sequelize } from 'sequelize';

const db = new Sequelize('database_app', 'root', 'MFD24@excel@e24e', {
    host: 'localhost',
    dialect: 'mysql'
})
export default db;