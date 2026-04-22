import fs from "fs";
import path from "path";

const logFile = path.join(process.cwd(), "logs/app.log");

const writeLog = (level, message) => {
  const time = new Date().toISOString();
  const log = `[${time}] [${level}] ${message}\n`;

  console.log(log);
  fs.appendFileSync(logFile, log);
};

export const logger = {
  info: (msg) => writeLog("INFO", msg),
  error: (msg) => writeLog("ERROR", msg),
  warn: (msg) => writeLog("WARN", msg),
};