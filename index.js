// index.js
const express = require('express')

const app = express()
const PORT = 4000
const HTTP_PORT = process.env.PORT || 8080; // assign a port
app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views/index.html'));
})

// Export the Express API
module.exports = app