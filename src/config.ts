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
    token: process.env.TOKEN || 'token',
  },
  mongo: {
    connectionString: process.env.MONGO_CONNECTION_STRING || 'mongodb://mongo:27017',
    dbName: process.env.DB_NAME || 'task'
  },
  clientEndpoint: process.env.CLIENT_ENDPOINT || 'http://localhost:80/',
};
