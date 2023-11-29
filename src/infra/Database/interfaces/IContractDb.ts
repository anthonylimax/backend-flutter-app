import { Login } from "./TLogin";
import { Response } from "express";
export interface IContractDb{
    verifyLogin(data : Login, response : Response) : Promise<any> 
    giveForum(response : Response) : Promise<any>
    giveInbox() : any
    giveInterest(response : Response) : any
    giveMessages(inbox_public_id : string) : any,
    giveRelUserAndEvent(id_public_user : string) : any,
    getFavorites(id_public_user: string, response : Response) : Promise<any>,
}