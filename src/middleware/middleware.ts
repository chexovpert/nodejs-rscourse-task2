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
        appendFile('log.txt', data, function(error) {
            if(error) throw error
        })
    })
}
const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {

    console.log(err.stack, "sfsafsda");
    res.status(500).send('error')
    next(err);
    
}
export {requestHandler, errorHandler}