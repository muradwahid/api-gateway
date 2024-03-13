import express, { NextFunction, Request, Response } from 'express';
import { userController } from './user.controller';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { UserValidation } from './user.validation';
const router = express.Router();

router.post('/', FileUploadHelper.upload.single("file"), (req:Request, res:Response, next: NextFunction) => { 
  req.body = UserValidation.createStudent.parse(JSON.parse(req.body.data));
  return userController.createStudent(req, res, next);
});

export const userRoutes = router;