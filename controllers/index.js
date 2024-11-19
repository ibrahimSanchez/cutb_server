const userController = require('./users');
const roleController = require('./roles');
const streamsController = require('./streams');
const curse_languagesController = require('./curse_languages');
const curse_levelsController = require('./curse_levels');
const cursesController = require('./curses');
const exam_languagesController = require('./exam_languages');
const examsController = require('./exams');
const languagesController = require('./languages');
const providersController = require('./providers');
const certification_record = require('./certification_record');



module.exports = {
    ...userController,
    ...roleController,
    ...streamsController,
    ...curse_languagesController,
    ...curse_levelsController,
    ...cursesController,
    ...exam_languagesController,
    ...examsController,
    ...languagesController,
    ...providersController,
    ...certification_record
}