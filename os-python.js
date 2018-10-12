const express = require('express')
const app = express()
const http = require('http')
const bodyParser = require('body-parser')
import fetch from 'node-fetch';

var headers = { 'Content-Type': 'application/json' };
var body = { "method": "cluster_sk_pca_incremental", "n_components": 3, "data": [xxx], "whiten": false }
app.get('/', (req, res) => {
    fetch('python.os.sttrcancer.io/py',
        { headers: headers, method: 'POST', body: JSON.stringify(body) })
        .then(res => res.json()).then(r => res.send(r));
    // res.send('Load test python.os.sttrcancer.io/py')
});

app.listen(3000, () => console.log('Testing on port 3000!'))

for (i = 0; i <= 100; i++) {
    console.log(i);
}
