import {v2 as cloudinary} from 'cloudinary';

export class Cloud{
        
    
    add(){
        cloudinary.config({ 
            cloud_name: 'dnnhfgiu5', 
            api_key: '714273354475597', 
            api_secret: 'KzH6qSD52yXm_I8yexXBhIzXPQw' 
        });
        cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
        { public_id: "olympic_flag" },);
    }
}


