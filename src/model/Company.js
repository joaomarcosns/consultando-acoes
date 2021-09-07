const { Model, DataTypes } = require('sequelize');

class Company extends Model {
    static init(sequelize){
        super.init({
            company_name: DataTypes.STRING,
            latest_price:DataTypes.FLOAT,
            symbol: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Company;