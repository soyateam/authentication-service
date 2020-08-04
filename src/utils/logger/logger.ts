import { SeverityLevel } from './severityLevel';

export const logger = {
  log: (message: string, severityLevel: SeverityLevel = SeverityLevel.Informational) => {
    console.log(`[${severityLevel}]: ${message}`);
  },
};
