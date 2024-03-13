import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { userRoutes } from '../modules/user/user.routes';
import { AuthenticationRoutes } from '../modules/auth/auth.routes';

const router = express.Router();

const moduleRoutes = [
  {path:"/create-student",routes:userRoutes},
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRoutes
  },
  {
    path: "/auth",
    routes:AuthenticationRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
