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
    shraga: {
      callbackURL: process.env.AUTH_CALLBACK_URL || 'http://localhost:3000/auth/callback',
      shragaURL: process.env.SHRAGA_URL || 'http://13.79.7.3',
      useEnrichId: true,
    },
    secret: process.env.SECRET_KEY || 'iamsososecret!youcaneverguess',
    token: process.env.TOKEN_KEY || 'token',
  },
  mongo: {
    connectionString: process.env.MONGO_CONNECTION_STRING || 'mongodb://mongo:27017'
  },
  clientEndpoint: process.env.CLIENT_ENDPOINT || 'http://localhost:80/',
};
