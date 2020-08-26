import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  serviceName: 'auth-service',
  logs: {
    connectionStringLogs: process.env.MONGO_CONNECTION_STRING_LOGS || 'mongodb://mongo:27017/logs',
    expiredInSec: 2592000, // 30 days
  },
  server: {
    port: process.env.PORT || 3000,
  },
  session: {
    secret: process.env.SESSION_SECRET || 'very-secret',
  },
  authentication: {
    shraga: {
      callbackURL: process.env.AUTH_CALLBACK_URL || '/auth/callback',
      shragaURL: process.env.SHRAGA_URL || 'http://13.79.7.3',
      useEnrichId: true,
    },
    secret: process.env.SECRET_KEY || 'iamsososecret!youcaneverguess',
    token: process.env.TOKEN_KEY || 'token',
  },
  mongo: {
    connectionString: process.env.MONGO_CONNECTION_STRING || 'mongodb://mongo:27017',
  },
  clientEndpoint: process.env.CLIENT_ENDPOINT || 'http://localhost:80/',
};
