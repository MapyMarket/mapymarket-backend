const express = require('express');

let app = express();

const CoinMarketCap = require('coinmarketcap-api');

const apiKey = 'api key';
const client = new CoinMarketCap(apiKey);


const client = new CoinMarketCap('api key')
client.getIdMap().then(console.log).catch(console.error)
client.getIdMap({listingStatus: 'inactive', limit: 10}).then(console.log).catch(console.error)
client.getIdMap({symbol: 'BTC,ETH'}).then(console.log).catch(console.error)
client.getIdMap({symbol: ['BTC', 'ETH']}).then(console.log).catch(console.error)
client.getIdMap({sort: 'cmc_rank'}).then(console.log).catch(console.error)


let port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log(`mapy is listening on localhost:${port}`);
})