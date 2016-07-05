import multer from 'multer';

export const upload = multer({
  dest: 'server/temp/'
});

export const imageUpload = upload.single('image', 1);
