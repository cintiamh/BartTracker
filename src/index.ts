import express from 'express';
import graphqlHTTP from 'express-graphql';
import {buildSchema} from "graphql";
import { Request, Response } from 'express';
import schema from '../schema/schema';
import {getStations} from './apiCalls';

// Bart's official API key
const BART_API_KEY = 'MW9S-E7SL-26DU-VV8V';
const BART_API_MAIN_PATH = 'https://api.bart.gov/api/';

// const schema = buildSchema(`
//     type Query {
//         hello:String
//     }
// `);

const root = {
    hello: () => {
        return 'Hello World!';
    }
};

const app = express();

const { PORT = 4000 } = process.env;

app.get('/', (req: Request, res: Response) => {
    getStations();
    res.send({
        message: 'Hello world!'
    });
});

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

if (require.main === module) {
    app.listen(PORT, () => {
        console.log('Server started at http://localhost:' + PORT);
    });
}

export default app;