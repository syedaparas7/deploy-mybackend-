import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.js';
import projectRouter from './routes/project.js';
import employeeRouter from './routes/employee.js';
import userRoutes from './routes/userRoutes.js';
import connectToDatabase from './db/db.js';

connectToDatabase();

const app = express();

const corsOptions = {
  origin: 'https://deply-project.vercel.app',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true, 
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/projects', projectRouter);
app.use('/api/employee', employeeRouter);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello Slesh');  // 
});

app.get('/get', (req, res) => {
  res.send('Hello World backend checkout');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { 
  console.log(`Server is Running on port ${PORT}`);
});
