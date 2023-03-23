import express, { Application, Response, Request } from 'express';

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
    res.setHeader("Access-Controll-Allow-Credentials", 'true');
    next();
})

app.get("/", (req: Request, res: Response) => {
    return res.status(200).send({ message: "Hello there "})
})

try {
    app.listen(port, () => {
        console.log("Successfully connected");
    })
} catch (err) {
    console.log(err);
}


