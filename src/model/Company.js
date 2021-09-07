const { Model, DataTypes } = require('sequelize');

class Company extends Model {
    static init(sequelize){
        super.init({
            company_name: DataTypes.STRING,
            latest_price:DataTypes.FLOAT,
            symbol: DataTypes.STRING,
            market_cap: DataTypes.FLOAT,
            week_high: DataTypes.FLOAT,
            week_low: DataTypes.FLOAT

        }, {
            sequelize
        })
    }
}

module.exports = Company;