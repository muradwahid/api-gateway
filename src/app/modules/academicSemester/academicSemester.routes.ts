import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterZodValidation } from './academicSemester.validation';
const router = express.Router();
router.get('/', AcademicSemesterController.getAllFromDb);
router.get('/:id', AcademicSemesterController.getDataById);
router.post(
  '/',
  validateRequest(AcademicSemesterZodValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.STUDENT),
  AcademicSemesterController.insertIntoDb
);
router.patch('/:id', AcademicSemesterController.updateOneIntoDb);
router.delete('/:id', AcademicSemesterController.deleteOneIntoDb);

export const AcademicSemesterRoutes = router;
