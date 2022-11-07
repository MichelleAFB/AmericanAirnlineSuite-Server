require('./config.env')
const mongoose = require('mongoose')


console.log(process.env.MONGO_URL)
const connectdb = async () => {
  try{
    const conn = await mongoose.connect("mongodb+srv://MAB190011:MAB190011@atlascluster.xdodz.mongodb.net/?retryWrites=true&w=majority/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      console.log(`MONGO DB connected: ${conn.connection.host}`)

      
  }catch(err){
    console.log(err.stack)
   // process.exit(1)
  }
}

connectdb()



module.exports=connectdb