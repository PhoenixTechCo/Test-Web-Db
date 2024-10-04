import { Router } from "express"
import { newTeamMemberRegister } from "../controllers/Team.controller.js"




const router = Router()




router.route("/registerNewMember").post(([]), newTeamMemberRegister)








export default router