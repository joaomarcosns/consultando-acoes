const axios = require('axios');
const token = require('../../config');
const Company = require('../model/Company');


module.exports = {
    async index(req, res) {
        const company = await Company.findAll();
        return res.json(company);
    },
    async store(req, res) {
        const { company_name, latest_price, symbol, market_cap, week_high, week_low} = req.body;
        const company = await Company.create({company_name, latest_price, symbol});
        return res.status(200).json(company);
        
    },
    async create(req, res) {
        const { id } = req.params
        const { data } = await axios(`https://cloud.iexapis.com/stable/stock/${id}/quote?token=${token}`);
        const company = await Company.create({
            company_name: data.companyName, 
            latest_price: data.latestPrice, 
            symbol: data.symbol,
            market_cap: data.marketCap,
            week_high: data.week52Low,
            week_low: data.week52Low
        });
        return res.status(200).json(company);
        
    },

}