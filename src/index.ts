import express from 'express';
import graphqlHTTP from 'express-graphql';
import {buildSchema} from "graphql";
import { Request, Response } from 'express';

const schema = buildSchema(`
    type Query {
        hello:String
    }
`);

const root = {
    hello: () => {
        return 'Hello World!';
    }
};

const app = express();

const { PORT = 3000 } = process.env;

app.get('/', (req: Request, res: Response) => {
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