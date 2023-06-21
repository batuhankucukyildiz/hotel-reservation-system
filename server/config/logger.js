import winston  from  "winston"

const logger = winston.createLogger({
  level: 'info', // Log seviyesi (debug, info, warn, error)
  format: winston.format.combine(
    winston.format.timestamp(), // Zaman damgası ekle
    winston.format.json() // JSON formatında loglar
  ),
  transports: [
    new winston.transports.Console(), // Konsola log yazdırma
    new winston.transports.File({ filename: 'log/app.log' }) // Dosyaya log yazdırma
  ]
});

export default logger; 