import express from 'express';
import cors from 'cors';
import { createServer } from "http";
import sample from './routes/sample.route';

const app: express.Express = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//CROS対応（というか完全無防備：本番環境ではだめ絶対）
// app.use(
//     (
//         req: express.Request,
//         res: express.Response,
//         next: express.NextFunction
//     ) => {
//         res.header('Access-Control-Allow-Origin', '*');
//         res.header('Access-Control-Allow-Methods', '*');
//         res.header('Access-Control-Allow-Headers', '*');
//         next();
//     }
// );
// Routes to use

app.use('/api', sample);
//app.use('/v1/holiday', holiday);

export const httpServer = createServer(app);
export default app;
