import winston, { createLogger, format } from "winston";
const dateFormat = () => new Date(Date.now()).toLocaleString("ru-RU");
export const logger = createLogger({
  level: "debug",
  format: format.combine(format.printf((info) => `${dateFormat()} | ${info.level.toUpperCase()} | ${info.message}`)),
  defaultMeta: { service: "user-service" },
  transports: [new winston.transports.Console(), new winston.transports.File({ level: "debug", filename: "logs/debug.log" })],
});
