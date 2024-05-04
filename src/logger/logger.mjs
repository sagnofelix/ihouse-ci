import { createLogger, transports, format } from "winston" ;
const { combine, timestamp, printf ,json} = format;

// const myFormat = printf(({ level, message, timestamp }) => {
//     return `${timestamp} ${level}: ${message}`;
// });

export default createLogger({
    // format: combine(
    //     timestamp(),
    //     myFormat
    // ),
    format: combine(timestamp(), json()),
    transports: [
        // new transports.Console(),
        new transports.File({ filename: 'app.log' })
    ]
});
