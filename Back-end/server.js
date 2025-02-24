const app = require('./app');
const path = require('path');
const connectDatabase = require('./Config/database');



connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`server is listening in Port: ${process.env.PORT} in ${process.env.NODE_ENV}`)
})

process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting Down the server due to unhandle rejection error`);
    server.close(()=>{
        process.exit(1);
    })

})

process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting Down the server due to uncaught Exception error`);
    server.close(()=>{
        process.exit(1);
    })

})




