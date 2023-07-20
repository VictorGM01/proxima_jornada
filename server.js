import "dotenv/config";
import app from "./src/app.js";

const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});