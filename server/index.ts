import express, { Express, Request, Response } from "express";
import expressWs, { Application } from 'express-ws';
import WebSocket from 'ws';  //This is the type package @types/ws

import { FrameworkTitle } from "./types";

export const app: Express = express();
app.use(express.static("static/"));

let wsConnections: { [x: string]: WebSocket; }[] = [];
const wsExpress: Application = expressWs(app, undefined, { wsOptions: { clientTracking: true } }).app;

interface IResponse {
  framework?: string;
}

const votes = {
  react: 0,
  angular: 0,
  vue: 0,
};


wsExpress.ws('/', (ws: WebSocket, req, next) => {

  ws.on("open", function () {
    // called when connection established
    console.log("WS Open");
  });

  ws.on('message', function (data: string) {
    // called when message is received from browser
    const response: IResponse = JSON.parse(data);
    console.log("WS Message from Browser");
    console.log(response);
    console.log(response !== null);
    console.log(response !== undefined);
    console.log(typeof data);

    if (response !== null
      && response !== undefined
      && typeof response === 'object'
      && response.hasOwnProperty("framework")) {

      console.log("has framework");
      const { framework } = response

      if (framework === 'react' || framework === 'vue' || framework === "angular")
        votes[framework] = votes[framework] + 1;
      console.log("Voted");
    }
    const jsonData = JSON.stringify({
      votes,
      msg: "Vote Received"
    });

    console.table(votes);
    ws.send(jsonData);
  });

  ws.on('close', function () {
    // called when browser closes connection
    console.log("WS Close");
  });

});

/*
### Blue Print ###

"/"
- serves stats page

"/votes/[framework]"
- post: casts vote for framework
- del: removes vote for framework
- get: gets votes (all? may need to paginate or require query params)

"/totals"
- get: fetches vote totals for display

*/


app.get("/", (req: Request, res: Response) => {
  res.sendFile(`static/index.html`);
});

app.get("/hi", (req: Request, res: Response) => {
  res.send("BYEEE!!");
});

