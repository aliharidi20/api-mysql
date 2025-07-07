const swaggerJsDoc = require("swagger-jsdoc");


const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API with Express and MySQL',
      version: '1.0.0',
      description: 'A simple CRUD API using Express and MySQL',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'], // path to the files with documentation comments
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;