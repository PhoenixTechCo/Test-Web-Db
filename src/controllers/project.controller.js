import { asyncHandeler } from "../utils/asyncHandler.js";
import { Projects } from "../models/projects.model.js"
import { ApiError } from "../utils/ApiError.js"
import { uploadOnCloud } from "../utils/cloudinary.service.js"
import { ApiResponce } from "../utils/ApiResponse.js"

const uploadNewProject = asyncHandeler ( async (req, res) => {
    // res.status(200).json({
    //     message : "ok"
    // })

const { pTitle, pdescription, pLiveLink, pCreatedBy } = req.body

if (
    [pTitle, pdescription, pLiveLink, pCreatedBy].some((field) => field?.trim() === "")
) {
    throw new ApiError(400, "First Upload Data , It's Must Required")
}


//taking local path
    

const pCoverImageLocalPath = req.files?.pCoverImage[0]?.path;


//Validition

if(!pCoverImageLocalPath) {
    throw new ApiError(400, "CoverImage Not Uploaded Yet")
}


//uploading


const pCoverImage = await uploadOnCloud(pCoverImageLocalPath)
if (!pCoverImage) {
    
    throw new ApiError (403, "Data Not Uploaded Yet")
}



//Adding Entry At DataBase



const projects = await Projects.create({
    pTitle,
    pCoverImage : pCoverImage.url,
    pCreatedBy,
    pdescription,
    pLiveLink 
});


//Giving id's


const createdProject = await Projects.findById(projects._id)

if (!createdProject) {throw new ApiError(404, "No Project Found")}

return res.status(201).json( new ApiResponce(200, "New Project Created Sucessfully")   )


} )

export {
    uploadNewProject
}