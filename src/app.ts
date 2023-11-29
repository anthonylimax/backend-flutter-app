import express from "express";
import cors from 'cors';
import { RoutingDataBase } from "./infra/express/routes";

const config = express();
config.use(express.json())
config.use(cors())
RoutingDataBase(config);

export default config;