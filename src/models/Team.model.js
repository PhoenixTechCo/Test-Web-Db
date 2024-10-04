import mongoose ,{ Schema} from "mongoose"; 


const TeamSchema = new Schema({

    Avatar : {
        type : String,
        required : true
    },

    Name : {
        type : String,
        required : true
    },

    About : {
        type : String,
        required : true
    },

    EducationalBackground : {
        type : String,
        required : true
    },

    Skils : {
        type : String,
        required : true
    },

    RoleInCompany : {
        type : String,
        required : true
    }
})


export const Team = mongoose.model("Team", TeamSchema)

