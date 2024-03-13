import { NextFunction, Request, Response } from "express";
import { AuthenticationService } from "./auth.service";
import sendResponse from "../../../shared/response";
import httpStatus from "http-status";
import config from "../../../config";

const loginUser = async (req: Request, res: Response, next: NextFunction) => { 
  try {
    const result = await AuthenticationService.loginUser(req);
  const { refreshToken, ...others } = result.data;

  //set refresh token into cookie
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true
  };
  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    data: others
  });
  } catch (error) {
    next(error);
  }
}
const refreshToken = async (req: Request, res: Response, next: NextFunction) => { 
  try {
    const result = await AuthenticationService.refreshToken(req);
  const { refreshToken, ...others } = result.data;

  //set refresh token into cookie
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true
  };
  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New refresh token',
    data: others
  });
  } catch (error) {
    next(error);
  }
}

export const AuthenticationController = {
  loginUser,
  refreshToken
}