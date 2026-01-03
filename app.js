import express from 'express';
import bookRoutes from './src/routes/books.route.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import expressEjsLayouts from 'express-ejs-layouts';

import connectDatabase from './src/config/db.js';

const app = express();

dotenv.config();

app.use(morgan('combined'));
app.use(express.static('public'));

const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT;
if (!DATABASE_URL || !PORT) {
    throw new Error("DATABASE_URL or PORT is not defined in environment variables");
}

connectDatabase(DATABASE_URL)

app.use(expressEjsLayouts)
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');
app.set('views', './src/views');

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});