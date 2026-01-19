const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Contacts API for W02 Project',
    },
    host: 'cse341-contacts-w6ms.onrender.com',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

/* generate swagger.json */
swaggerAutogen(outputFile, endpointsFiles, doc);