import express from "express";
import cors from "cors";
import { readFile, sendmail, writeFile } from "./utils/utils.js";
import "./config/config.js"


const app = express();
app.use(cors());
app.get("/api/seats", (_, res) => {
    readFile()
        .then(data => res.json(data));
});
app.put("/api/seats/:id", (req, res) => {
    const platzNummer = req.params.id
    sendmail(platzNummer)
        .then(data => {
            readFile()
                .then(data => {
                    if(data[platzNummer -1].reserviert === true){
                        data[platzNummer -1].reserviert = false
                    }else{
                        data[platzNummer -1].reserviert = true
                    }
                    return data
                })
                .then(data => {
                    writeFile(data)
                    return(data)
                })
                .then(data => res.json(data))
        });
});





app.delete("/api/seats/", (_, res) => {

   
    
            readFile()
                .then(data => {
                data.forEach( i  => {
                    i.reserviert = false
                });
                return(data)
                })
                .then(data => {
                    writeFile(data)
                    return(data)
                })
                .then(data => res.json(data))
        });














app.listen(9999, () => {
    console.log("läuft auf 9999");
});