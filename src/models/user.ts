
export default class User{
    constructor(
    private about : string,
    private name : string,
    private id : string,
    private email : string,
    private password : string,
    private user_public_id : string
    ){}
    
        get User_public_id(){
            return this.user_public_id;
        }
        set User_public_id(value : string) {
            this.user_public_id = value;
        }
    
    
        get Password(){
            return this.password;
        }
        set Password(value : string){
            this.password = value;
        }
    
    
        get Email(){
            return this.email;
        }
        set Email(value : string){
            this.email = value;
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
        get About(){
            return this.about;
        }
        set About(value : string){
            this.about = value;
        }

}