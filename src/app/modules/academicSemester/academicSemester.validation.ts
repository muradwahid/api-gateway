import { z } from 'zod';
import { academicSemesterCodes, academicSemesterMonths, academicSemesterTitles } from './academicSemester.constant';

const create = z.object({
  body: z.object({
    year: z.number({ required_error: 'year is required!' }),
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'title is required!'
    }),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]], {
      required_error: 'code is required!'
    }),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'start month is required!'
    }),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'end month is required!'
    })
  })
});
const updateAcademicSemester = z.object({
  body: z.object({
    year: z.string().optional(),
    title: z.enum([...academicSemesterTitles] as [string, ...string[]]).optional(),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]]).optional(),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]]).optional(),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]]).optional()
  })
});
export const AcademicSemesterZodValidation = {
  create,
  updateAcademicSemester
};
