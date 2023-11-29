import config from "./app";
import dotenv from 'dotenv';

dotenv.config();

config.listen(process.env.PORT, ()=>{
    console.log("running in port: " + process.env.PORT);
});