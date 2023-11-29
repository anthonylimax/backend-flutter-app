// CREATE TABLE `Forum` (
//     + `name` varchar(60),
//     + `id` int NOT NULL AUTO_INCREMENT,
//     + `description` varchar(300) NOT NULL,
//     + `event_data` int NOT NULL,
//     + `organizer` varchar(40) NOT NULL,
//     + `forum_public_id` varchar(40) NOT NULL,
//     + PRIMARY KEY (`id`)
//     + ) ENGINE InnoDB,
//     + CHARSET utf8mb4,
//     + COLLATE utf8mb4_0900_ai_ci;

export default class Forum{
    constructor(
        private forum_public_id : string,
        private name : string,
        private id : string,
        private event_data : string,
        private organizer : string,
        private description : string
        ){}
        
            get Forumpublicid(){
                return this.forum_public_id;
            }
            set Forumpublicid(value : string) {
                this.forum_public_id = value;
            }
        
        
            get Eventdata(){
                return this.event_data;
            }
            set Eventdata(value : string){
                this.event_data = value;
            }
        
        
            get Organizer(){
                return this.organizer;
            }
            set Organizer(value : string){
                this.organizer = value;
            }
        
        
            get Id(){
                return this.id;
            }
            set Id(value : string){
                this.id = value;
            }
        
            get Name(){
                return this.name;
            }
            set Name(value : string){
                this.name = value;
            }
            get Description(){
                return this.description;
            }
            set Description(value : string){
                this.description = value;
            }
            fromJson(obj : {
                name: string,
                id: string,
                forum_public_id: string,
                organizer: string,
                event_data: string,
                description: string,
            }) : Forum{
                return new Forum(obj.forum_public_id, obj.name, obj.id, obj.event_data, obj.organizer, obj.description);
            }
}
