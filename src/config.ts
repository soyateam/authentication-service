import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  session: {
    secret: process.env.SESSION_SECRET || 'very-secret',
  },
  authentication: {
    callbackURL: process.env.AUTH_CALLBACK_URL || 'http://localhost:3000/auth/callback',
    shragaURL: process.env.SHRAGA_URL || 'http://13.79.7.3',
    useEnrichId: true,
    secret: process.env.SECRET_KEY || 'iamsososecret!youcaneverguess',
    daysExpires: 3,
    token: process.env.TOKEN_KEY || 'token',
  },
  mongo: {
    connectionString:
      `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.MONGO_URL}` || 'mongodb://mongo:27017',
  },
  clientEndpoint: process.env.CLIENT_ENDPOINT || 'http://localhost:80/',
};
