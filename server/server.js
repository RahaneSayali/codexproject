const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors({
    origin: '*'
}))

let leet = require('./leetcode');
app.get('/', (req, res) => {
    res.send(`<b>API URL:</b>/<b style="color:crimson;">yourLeetcodeUsername</b>`)
});
app.get('/:id', leet.leetcode);

app.listen(5000, () => {
    console.log(`App is running on port 5000`);
});