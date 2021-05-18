import Sequelize from 'sequelize';

class Database {
    constructor() {
        this.postgres()
    }
    postgres(){
        this.connection = new sequelize("db", "postgres", "2", {"host": "localhost", "dialect": "postgres"});

        
    }
}


 
export default new Database();