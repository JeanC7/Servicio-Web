import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'Dispositivos',
    'postgres',
    '123456',
    {
        host:'localhost',
        dialect: 'postgres',
        pool:{
            max: 5,
            min:0,
            require: 30000,
            idle: 10000
        },
        logging:false
    }
)