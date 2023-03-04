import express from 'express';
import { Router } from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const route = Router();

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200 // Alguns navegadores (por exemplo, IE11) não suportam o status[r.monarge] 204
}));


route.get('/cpf/:cpf', async (req, res) => {
  try {
    const cpf = req.params.cpf;
    const response = await axios.get(`https://isyubii-api.tk/puxar?type=cpf3&q=${cpf}&token=Eltonpainel`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});



app.use(route);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
