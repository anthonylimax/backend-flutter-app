import { MySqlAdapter } from "../../Database/MysqlAdapter";
import { RoutingDataBase } from "../routes";
import express, { Application } from 'express';


export default function mySqlAdapterFactory(app : Application){
    return RoutingDataBase(app);
};
