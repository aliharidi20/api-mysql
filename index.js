const express = require("express");
const dotenv = require("dotenv");
const usersRoute = require("./routes/usersRoutes");
const clientsRoute = require('./routes/clientsRoutes');
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("./swagger");
const cors = require("cors")


dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/users',usersRoute);
app.use('/api/clients',clientsRoute)

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => console.log(`the server is running in prot ${PORT}`));