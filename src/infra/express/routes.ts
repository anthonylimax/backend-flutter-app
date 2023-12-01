import { Application, Request, Response, Router } from "express";
import { MySqlAdapter } from "../Database/MysqlAdapter";
import { Login } from "../Database/interfaces/TLogin";
import { Cloud } from "../Database/CloudStorage";

export const RoutingDataBase = (routing : Router) => {
    const db =  MySqlAdapter.instance;
    routing.post('/getForuns', async (request : Request, response : Response)=>{
        let data = await db.giveForum(response);

    });
    routing.post('/verifycredentials', async (request : Request, response : Response)=>{
        let Login : Login = {
            email: request.body.email,
            password: request.body.password,
        }
        let result = await db.verifyLogin(Login, response);
    });

    routing.get("/getInterests", (request: Request ,response : Response )=>{    
        db.giveInterest(response);
    })
    routing.get("/addingImage", (request: Request, response : Response)=>{
        new Cloud().add();
        response.json("ok");
    })
    routing.post("/user/favorites", async (request: Request, response : Response)=>{
        let data = request.body.id;
        db.getFavorites(data, response);
    })
    routing.post("/getting/events", async (request: Request, response : Response)=>{
        let data = request.body.id;
        db.getEvents(response, data);
    })
    routing.delete("/deleting/favorite", async (request : Request, response : Response) =>{
        db.DeletingFavorite(response, request.body);
    })
    routing.post("/adding/favorite", async (request : Request, response : Response) =>{
        db.AddingFavorite(response, request.body);
    })
    routing.post('/getting/forum', (request: Request, response : Response)=>{

    })
}