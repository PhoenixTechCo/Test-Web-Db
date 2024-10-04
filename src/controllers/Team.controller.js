import { asyncHandeler } from "../utils/asyncHandler.js";
import { Team  } from "../models/Team.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponse.js";




const newTeamMemberRegister = asyncHandeler ( async (req, res) => 
{


//file import data add _/_/
//check validation
//image upload avatar
//data base add


const { Name, About,  EducationalBackground, Skills, RoleInCompany } = req.body
 

if ([Name, About, EducationalBackground, Skills, RoleInCompany].some((field) => field?.trim() === ""))
{
    throw new ApiError(401, "All The Fields Are Required")
}

})



export {

    newTeamMemberRegister

}