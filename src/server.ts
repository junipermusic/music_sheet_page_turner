// can be access by http://localhost:3000/ after running npx ts-node src/server.ts
// The command npx ts-node is a shortcut to compile with tsc and run the code
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})