import {Request,Response,NextFunction} from "express"
import { FileUploadHelper } from "../../../helpers/FileUploadHelper"
import sendResponse from "../../../shared/response";
import { UserService } from "./user.service";

const createStudent = async (req: Request, res: Response, next: NextFunction) => { 
try {
    const result = await UserService.createStudent(req);
    sendResponse(res, result);
} catch (error) {
  next(error)
}
}

export const userController = {
  createStudent
}