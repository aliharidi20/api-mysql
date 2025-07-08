const express = require("express");
const dotenv = require("dotenv");
const consumersRoute = require("./routes/consumers");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("./swagger");
const cors = require("cors")


dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/consumers',consumersRoute);

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => console.log(`the server is running in prot ${PORT}`));