import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/response';
import { AcademicSemesterService } from './academicSemester.service';

const insertIntoDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.insertIntoDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getAllFromDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getDataById = async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await AcademicSemesterService.getDataById(req);
    sendResponse(res,result);
  } catch (error) {
    next(error)
  }
}

const updateOneIntoDb = async (req: Request, res: Response, next: NextFunction) => { 
  try {
    const result = await AcademicSemesterService.updateOneIntoDb(req);
    sendResponse(res,result)
  } catch (error) {
    next(error);
  }
}

const deleteOneIntoDb = async (req: Request, res: Response, next: NextFunction)=> { 
  try {
    const result = await AcademicSemesterService.deleteOneIntoDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error)
  }
}

export const AcademicSemesterController = {
  insertIntoDb,
  getAllFromDb,
  getDataById,
  updateOneIntoDb,
  deleteOneIntoDb
};
