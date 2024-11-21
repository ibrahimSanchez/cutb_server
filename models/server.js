const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            approveCurse: '/api/approveCurse',
            approveExam: '/api/approveExam',
            auth: '/api/auth',
            streams: '/api/streams',
            exams: '/api/exams',
            curses: '/api/curses',
            languages: '/api/languages',
            curse_languages: '/api/curse_languages',
            curse_levels: '/api/curse_levels',
            exam_languages: '/api/exam_languages',
            providers: '/api/providers',
            roles: '/api/roles',
            users: '/api/users',
            certification_record: '/api/certification_records',
            membership_provider_request: '/api/membership_provider_requests',
            news: '/api/news',
        }

        this.connectDB();

        this.middlewares();

        this.routes();
    }

    // Conneccion con la DB
    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors()); //Buscar en documentacion de npm para ver como se hacen las restrinciones de las rutas que puedan hacer peticiones

        // Lectura y parseo del body
        this.app.use(express.json());

        // Public   
        this.app.use(express.static('public'));

        // para cargar archivos
        // this.app.use(fileUpload({
        //     useTempFiles: true,
        //     tempFileDir: '/tmp/',
        //     createParentPath: true
        // }));
    }

    routes() {
        this.app.use(this.paths.auth, require('../routes/auth'));

        this.app.use(this.paths.streams, require('../routes/streams'));
        this.app.use(this.paths.exams, require('../routes/exams'));
        this.app.use(this.paths.curses, require('../routes/curses'));
        this.app.use(this.paths.languages, require('../routes/languages'));
        this.app.use(this.paths.curse_languages, require('../routes/curse_languages'));
        this.app.use(this.paths.curse_levels, require('../routes/curse_levels'));
        this.app.use(this.paths.exam_languages, require('../routes/exam_languages'));
        this.app.use(this.paths.providers, require('../routes/providers'));
        this.app.use(this.paths.roles, require('../routes/roles'));
        this.app.use(this.paths.users, require('../routes/users'));
        this.app.use(this.paths.approveCurse, require('../routes/approveCurse'));
        this.app.use(this.paths.approveExam, require('../routes/approveExam'));
        this.app.use(this.paths.certification_record, require('../routes/certification_record'));
        this.app.use(this.paths.membership_provider_request, require('../routes/membership_provider_request'));
        this.app.use(this.paths.news, require('../routes/news'));
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en el puerto ', this.port);
        });
    }
}


module.exports = Server;