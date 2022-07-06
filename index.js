//~ IMPORTATION DOTENV
import 'dotenv/config';

import express from 'express';
const app = express();
import { router } from './app/routers/index.js';

//~ IMPORTATION SWAGGER DOCS
import { specs, serve, setup, cssOptions} from './app/swaggerDocs/swaggerDocs.js';
app.use('/api-docs', serve, setup(specs, cssOptions));

app.use(router);

//~ LANCEMENT DU SERVER
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(` \x1b[1;33m\u26a1http://localhost:${PORT} \u26a1\x1b[0m`);
});