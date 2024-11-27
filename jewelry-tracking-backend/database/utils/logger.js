const winston = require("winston");

const logger = winston.createLogger({
  level: "info", // Log "info" and more severe levels ("warn", "error")
  format: winston.format.combine(
    winston.format.timestamp(), // Automatically include timestamps
    winston.format.printf(
      ({ timestamp, level, message }) =>
        `${timestamp} [${level.toUpperCase()}]: ${message}`
    )
  ),
  transports: [
    new winston.transports.Console(), // Output logs to the console
    new winston.transports.File({ filename: "combined.log" }), // Write logs to a file
  ],
});

module.exports = logger;
