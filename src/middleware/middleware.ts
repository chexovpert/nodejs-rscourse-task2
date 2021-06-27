import type { RequestHandler, ErrorRequestHandler } from "express";
import {finished} from "stream"
import {appendFile, appendFileSync} from "fs"

const requestLogsPath = './logs/requestlogs.txt'
const errorLogsPath = './logs/errorlogs.txt'
class RestError {
    code: number;
    message: string;
    constructor(code: number, message: string) {
        this.code = code;
        this.message = message
    }
    static badRequest(msg: string) : RestError {
        return new RestError(404, msg)
    }
    // static internal(msg: string) : RestError {
    //     return new RestError(500, msg)
    // }
}

const requestHandler: RequestHandler = (req, res, next) : void => {
    const {method, url, body} = req;
    const start = Date.now()
    next();
    finished(res, ()=> {
        const ms= Date.now()-start;
        const {params} = req;
        const {statusCode} = res;
        const data = `\nMethod: ${method} \nUrl: ${url} \nStatus Code:${statusCode} \nTime:[${ms}ms]\nParams:`+ JSON.stringify(params)+ '\nBody:'+ JSON.stringify(body)+ '\n';
        appendFile(requestLogsPath, data, function(error) {
            if(error) throw error
        })
    })
}

const restErrorHandler: ErrorRequestHandler = (err, req, res, next) : void => {
    if (err instanceof RestError) {
        const {method, url, body} = req;
        const start = Date.now()
        finished(res, ()=> {
            const ms= Date.now()-start;
            const data: string = `\nMethod: ${method} \nUrl: ${url} \nError Status Code:${err.code} \nError message:${err.message} \nTime:[${ms}ms]`+ '\nBody:'+ JSON.stringify(body)+ '\n';
            appendFile(errorLogsPath, data, function(error) {
                if(error) throw error
            })
            process.stdout.write(data)
            
        })
        res.status(err.code).json(err.message)
        return;
    } 
    next(err);
}

const internalErrorHandler: ErrorRequestHandler = (err, req, res, _next) : void => {
    const {method, url, body} = req;
    const start = Date.now();
    const internalErrorCode = 500;
    finished(res, ()=> {
        const ms= Date.now()-start;
        const data: string = `\nMethod: ${method} \nUrl: ${url} \nError Status Code:${internalErrorCode} \nError:${err} \nTime:[${ms}ms]`+ '\nBody:'+ JSON.stringify(body)+ '\n';
        appendFile(errorLogsPath, data, function(error) {
            if(error) throw error
        })
        process.stdout.write(data)
        
    })
    res.status(internalErrorCode).json(err)
}

const uncaughtExceptionHandler = (err: Error, origin: string) : void => {
    const data: string = `\nCaught exception: ${err}\n` +`Exception origin: ${origin}\n`;
    appendFileSync(errorLogsPath, data);
    process.stdout.write(data);
}

const unhandledRejectionHandler = (reason: Error| unknown, promise: Promise<unknown>) : void => {
    const data: string = '\nUnhandled Rejection at:' + promise + 'reason: ' + reason +'\n';
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
    appendFileSync(errorLogsPath, data);
    process.stdout.write(data);
}
export {requestHandler, restErrorHandler,internalErrorHandler, RestError, uncaughtExceptionHandler, unhandledRejectionHandler}