import {Request} from 'express';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { ICloudinaryResponse, IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';
import { IGenericErrorResponse } from '../../../interfaces/common';
const createStudent = async (req: Request) => { 
  const file = req.file as IUploadFile;
  const uploadedImage:ICloudinaryResponse = await FileUploadHelper.uploadToCloudinary(file);
  if (uploadedImage) {
    req.body.profileImage = uploadedImage.secure_url;
  }
  const {academicDepartmentId,academicFacultyId,academicSemesterId} = req.body.student;

  const academicDepartmentResponse=await AuthService.get(`/academic-departments?syncId=${academicDepartmentId}`)

  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.academicDepartmentId =academicDepartmentResponse.data[0].id
  }
  const academicFacultyResponse = await AuthService.get(
    `/academic-faculties?syncId=${academicFacultyId}`
  );

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.academicFacultyId = academicFacultyResponse.data[0].id;
  }
  const academicSemesterResponse = await AuthService.get(
    `/academic-semesters?syncId=${academicSemesterId}`
  );

  if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
    req.body.academicSemesterId = academicSemesterResponse.data[0].id;
  }
  const response: IGenericErrorResponse = await AuthService.post(
    '/users/create-student',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
}

export const UserService = {
  createStudent
}