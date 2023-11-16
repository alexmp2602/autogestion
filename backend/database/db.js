import { Sequelize } from "sequelize";

const db = new Sequelize ('munitest', 'root', 'marcelo1', {
    host : 'localhost',
    dialect : 'mysql'
});

export default db;