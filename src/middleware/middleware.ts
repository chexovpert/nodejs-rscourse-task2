import type { RequestHandler, ErrorRequestHandler } from "express";
import {finished} from "stream"
import {appendFile} from "fs"
const requestHandler: RequestHandler = (req, res, next) => {
    const {method, url, body} = req;
    const start = Date.now()
    // res.on("finish", () => {
    // })
    next();
    finished(res, ()=> {
        const ms= Date.now()-start;
        const {params} = req;
        const {statusCode} = res;
        //console.log(`Method: ${method} \nUrl: ${url} \nStatus Code:${statusCode} \nTime:[${ms}ms]\nParams:`, params, '\nBody:', body);
        const data = `\nMethod: ${method} \nUrl: ${url} \nStatus Code:${statusCode} \nTime:[${ms}ms]\nParams:`+ JSON.stringify(params)+ '\nBody:'+ JSON.stringify(body)+ '\n';
        appendFile('./logs/requestlogs.txt', data, function(error) {
            if(error) throw error
        })
    })
}
const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
    const {method, url, body} = req;
    const start = Date.now()
    // res.on("finish", () => {
    // })
    //next();
    finished(res, ()=> {
        const ms= Date.now()-start;
        //const {params} = req;
        //const {statusCode} = res;
        //console.log(`Method: ${method} \nUrl: ${url} \nStatus Code:${statusCode} \nTime:[${ms}ms]\nParams:`, params, '\nBody:', body);
        const data = `\nMethod: ${method} \nUrl: ${url} \nError Status Code:${err.status} \nError message:${err.message} \nTime:[${ms}ms]`+ '\nBody:'+ JSON.stringify(body)+ '\n';
        appendFile('./logs/errorlogs.txt', data, function(error) {
            if(error) throw error
        })
        process.stdout.write(data)
    })
    //console.log(err, "sfsafsda");
    res.status(err.status).json(err.message)
    //next(err);
    
}
export {requestHandler, errorHandler}