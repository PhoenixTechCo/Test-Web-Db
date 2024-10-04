import mongoose, {Schema} from "mongoose";



const projectSchema = new Schema({
    pCoverImage : {

            type : String,
            required : true
    },

    pTitle : {

        type : String,
        required : true
        
    },

    pdescription  : {

        type : String,
        required : true
        
    },

    pLiveLink : {
        
        type : String,
        required : true
    },

    pCreatedBy : {
        
        type : String,
        required : true

    }
},
{
    timestamps : true
}
)


export const Projects = mongoose.model("Projects", projectSchema)