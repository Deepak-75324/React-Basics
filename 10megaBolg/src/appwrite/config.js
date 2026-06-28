import conf from '../conf.js'
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class service{
    client = new Client();
    databses;
    bucket;

    constructor(){
        this.client
           .setEndpoint(conf.appwriteUrl)
           .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({tittle, slug, content, featuedImage, status,userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    tittle,
                    content,
                    featuedImage,
                    status,
                    userId
                }
            )
        }catch(error){
             console.log("Appwrite service :: createPost :: error", error);
        }

    }

    async updatePost(slug, {tittle, content, featuedImage, status}){ // slug helps to identify document id
        try{
            return await this.databases.updateDocument
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    tittle,
                    content,
                    featuedImage,
                    status 
                }
        }catch(error){
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }
    // delete post
}

const service = new Service()
export default Service