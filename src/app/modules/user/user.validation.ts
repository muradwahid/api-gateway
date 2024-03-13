import { z } from "zod";

const createStudent = z.object({
  password: z.string().optional(),
  student: z.object({
    name: z.object({
      firstName: z.string({
        required_error: 'First Name is required'
      }),
      middleName: z
        .string({
          required_error: 'Middle Name is required'
        })
        .optional(),
      lastName: z.string({
        required_error: 'Last Name is required'
      })
    }),
    gender: z.string({ required_error: 'Gender is required' }),
    dateOfBirth: z.string({ required_error: 'date of birth is required' }).optional(),
    email: z.string({ required_error: 'email address is required' }).email(),
    contactNo: z.string({ required_error: 'contact number is required' }),
    emergencyContactNo: z.string({ required_error: 'emergency contact number is required' }).optional(),
    bloodGroup: z.string().optional(),
    presentAddress: z.string({ required_error: 'present address is required' }).optional(),
    permanentAddress: z.string({ required_error: 'permanent address is required' }).optional(),
    academicSemesterId: z.string({ required_error: 'academic semester is required' }),
    academicDepartmentId: z.string({ required_error: 'academic department is required' }),
    academicFacultyId: z.string({ required_error: 'academic facility is required' }),
    guardian: z.object({
      fatherName: z.string({ required_error: 'Family name is required' }),
      fatherOccupation: z.string({ required_error: 'father ocupation is required' }),
      fatherContactNo: z.string({ required_error: 'Father contact no is required' }),
      motherName: z.string({ required_error: 'Mother name is required' }),
      motherOccupation: z.string({ required_error: 'Mother ocupation is required' }),
      motherContactNo: z.string({ required_error: 'Mother is required' }),
      address: z.string({ required_error: 'Guardian address is required' })
    }).optional(),
    localGuardian: z.object({
      name: z.string({ required_error: 'local guardian name is required' }),
      occupation: z.string({ required_error: 'Local guardian occupation is required' }),
      contactNo: z.string({ required_error: 'local guardian contact is required' }),
      address: z.string({ required_error: 'Local guardian address is required' })
    }).optional(),
  })
});

export const UserValidation = {
  createStudent
};