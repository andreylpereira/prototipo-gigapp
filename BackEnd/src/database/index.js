import Sequelize from 'sequelize';
import DatabaseConfig from '../config/database';

import User from '../app/models/user';

const models = [User];

class DataBase {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(DatabaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new DataBase();