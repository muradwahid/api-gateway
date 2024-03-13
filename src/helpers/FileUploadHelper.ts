import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import * as fs from 'fs';
import { ICloudinaryResponse, IUploadFile } from '../interfaces/file';

cloudinary.config({
  cloud_name: 'dfbfcockl',
  api_key: '194926417895197',
  api_secret: 'aUCxBB3C9A9sjPekeYEt1BSIsn0'
});

const storage = multer.diskStorage({
  destination: function (req, file, callback) { 
    callback(null,"uploads/")
  },
  filename: function (req, file, callback) { 
    callback(null,file.originalname)
  }
})

const upload = multer({ storage: storage });

const uploadToCloudinary = async (file:IUploadFile):Promise<ICloudinaryResponse> => {
  return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        file.path,
        (error:Error, result:ICloudinaryResponse)=>{
          fs.unlinkSync(file.path);
          if (error) {
            reject(error);
          } else { 
            resolve(result);
          }
        }
      );
  })
};

export const FileUploadHelper = {
  uploadToCloudinary,
  upload
};
