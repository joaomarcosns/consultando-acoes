const axios = require('axios');
const Company = require('../model/Company');


module.exports = {
    async index(req, res) {
        const company = await Company.findAll();
        return res.json(company);
    },
    async store(req, res) {
        const { company_name, latest_price, symbol} = req.body;
        const company = await Company.create({company_name, latest_price, symbol});
        return res.json(company);
        
    },
    async create(req, res) {
        const { id } = req.params
        const { data } = await axios(`https://cloud.iexapis.com/stable/stock/${id}/quote?token=pk_cb48fec75c7c4792b506a28ab0ee99a4`);
        const company = await Company.create({
            company_name: data.companyName, 
            latest_price: data.latestPrice, 
            symbol: data.symbol
        });
        return res.json(company);
        
    },

}



// try {
//     const {data} = await axios(`https://cloud.iexapis.com/stable/stock/${id}/quote?token=pk_cb48fec75c7c4792b506a28ab0ee99a4`);
    
//     console.log(data);
// } catch (error) {
//     res.send({error: error.message});
// }