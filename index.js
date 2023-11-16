const express = require('express')
const app = express()
const mongoose = require("mongoose");
const port = 3000
const cors=require("cors")


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(cors())
app.use(express.json())






// delivery router


const DeliveryRoutes=require("./Routers/DeliveryBoy")

app.use(DeliveryRoutes)





const mongoDB = "mongodb://127.0.0.1/Movies";

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("Db connected");
}
// 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})