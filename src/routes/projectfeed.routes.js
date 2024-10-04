import { Router } from "express"
import { uploadNewProject } from "../controllers/project.controller.js"
import {upload} from "../middleware/multer.middleware.js"

const router = Router()


router.route("/createprojects").post(
    upload.fields([
            
        {
            name : "pCoverImage",
            maxCount : 1
        }
    ]),
    uploadNewProject
)



export default router