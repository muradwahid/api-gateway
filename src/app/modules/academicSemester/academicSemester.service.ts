import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';
const insertIntoDb = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post('/academic-semesters', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};
const getAllFromDb = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/academic-semesters', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};

const getDataById = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(`/academic-semesters/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};

const updateOneIntoDb = async (req: Request): Promise<IGenericResponse> => {
  const response:IGenericResponse = await CoreService.patch(`/academic-semesters/${req.params.id}`,req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};
const deleteOneIntoDb = async (req: Request):Promise<IGenericResponse> => { 
  const response: IGenericResponse = await CoreService.delete(`/academic-semesters/${req.params.id}`, {
    headers: {
      Authorization:req.headers.authorization
    }
  })
  return response.data
}

export const AcademicSemesterService = {
  insertIntoDb,
  getAllFromDb,
  getDataById,
  updateOneIntoDb,
  deleteOneIntoDb
};
