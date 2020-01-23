import * as express from 'express';
import { Request, Response } from 'express';

const app = express();

const { PORT = 3000 } = process.env;

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Hello world!'
    });
});



if (require.main === module) {
    app.listen(PORT, () => {
        console.log('Server started at http://localhost:' + PORT);
    });
}

export default app;