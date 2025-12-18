export const replaceS3Url = (content: string): string => {
  const OLD_S3_URL = 'https://swiftex.s3.ap-south-1.amazonaws.com';
  const NEW_S3_URL = 'https://swift-ex-web-app.s3.us-east-2.amazonaws.com/s3-objects';

  if (!content.includes(OLD_S3_URL)) {
    return content;
  }

  return content.replace(new RegExp(OLD_S3_URL, 'g'), NEW_S3_URL);
};
