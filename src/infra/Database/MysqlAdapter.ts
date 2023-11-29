import Connection from "mysql2/typings/mysql/lib/Connection";
import { IContractDb } from "./interfaces/IContractDb";
import { Login } from "./interfaces/TLogin";
import mysql from "mysql2";
import { Response } from "express";
import crypto from "crypto";

export class MySqlAdapter implements IContractDb {
  static instance: MySqlAdapter = new MySqlAdapter();

  constructor() {}

  async verifyLogin(data: Login, response: Response): Promise<any> {
    try {
      let globalConnection = mysql.createConnection(
        process.env.DATABASE_URL || ""
      );
      globalConnection.query(
        "SELECT about, name, user_public_id FROM User where email = ? and password = ?",
        [data.email, data.password],
        (err: any, result: any, fields: any) => {
          if (result[0] != undefined) {
            console.log("here 1");
            response.send(result[0]);
          } else {
            console.log("here 2");
            response.send({ error: true });
          }
        }
      );
    } catch (e) {}
  }

  async giveForum(response: Response): Promise<any> {
    try {
      let globalConnection = mysql.createConnection(
        process.env.DATABASE_URL || ""
      );
      globalConnection.query(
        "SELECT * FROM Forum",
        (error: any, result: any, fields: any) => {
          let res = result[0];
          response.send(res);
        }
      );
    } catch (e) {
      response.send(e);
    }
  }

  giveInbox() {
    throw new Error("Method not implemented.");
  }

  giveInterest(response: Response) {
    try {
      let globalConnection = mysql.createConnection(
        process.env.DATABASE_URL || ""
      );
      globalConnection.query(
        "SELECT * FROM Interests",
        (error: any, result: any, fields: any) => {
          response.json(result);
        }
      );
    } catch (e) {
      response.send(e);
    }
  }
  async setImage() {}
  giveMessages(inbox_public_id: string) {
    throw new Error("Method not implemented.");
  }
  giveRelUserAndEvent(id_public_user: string) {
    throw new Error("Method not implemented.");
  }
  async getFavorites(id_public_user : string, response : Response){
    let globalConnection = mysql.createConnection(
        process.env.DATABASE_URL || ""
      );
    let data = [];
      globalConnection.query("select e.description, e.event_data, e.organizer, e.name, e.localizacao from Favorites as f join User as u on f.user_public_id = ? join Event as e on e.forum_public_id = f.id_event;", [id_public_user], (error: any, result: any, fields: any)=>{
        console.log(result);
        response.json(result);
      })
  }
}
