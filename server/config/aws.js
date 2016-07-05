import AWS from 'aws-sdk';

export default function(){
  AWS.config.loadFromPath('./server/config/aws-credentials.json');

  //Additional configs here...

  // const fileStream = fs.createReadStream('./server/config/landing0613.png');
  // fileStream.on('error', (err) => { if (err) throw err; });
  //
  // fileStream.on('open', () => {
  //   const s3 = new AWS.S3();
  //   s3.putObject({
  //     Bucket: 'etourney-media',
  //     Key: 'landing0613.png',
  //     Body: fileStream
  //   }, (err) => { if (err) throw err; });
  // });
}

export const S3 = new AWS.S3();
export const S3BUCKET = 'etourney-media';
