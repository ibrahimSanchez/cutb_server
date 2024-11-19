const { User } = require("../models/user");
const { Role } = require("../models/role");
const { Provider } = require("../models/provider");
const { Curse } = require("../models/curse");
const { Exam } = require("../models/exam");
const { Curse_level } = require("../models/curse_level");
const { Certification_record } = require("../models/certification_record");
const { Membership_provider_request } = require("../models/membership_provider_request");
const { News } = require("../models/news");


// todo--------------------------------------------------------------------------------------
// todo------------------------------    role valid   ---------------------------------------
// todo--------------------------------------------------------------------------------------
const isRoleValid = async (role = '') => {
    const existRole = await Role.findAll({ where: { role } });

    if (existRole.length === 0) {
        throw new Error(`El rol ${role} no esta en la BD`);
    }
}


// todo--------------------------------------------------------------------------------------
// todo------------------------------    exist email   --------------------------------------
// todo--------------------------------------------------------------------------------------
const existEmail = async (email = '') => {
    const exist = await User.findAll({ where: { email } });

    if (exist.length > 0)
        throw new Error(`El email: ${email} ya esta registrado`)
}



// todo--------------------------------------------------------------------------------------
// todo------------------------------    exist user   ---------------------------------------
// todo--------------------------------------------------------------------------------------
const existUser = async (id = '') => {
    const user = await User.findByPk(id);
    if (!user)
        throw new Error(`No existe el usuario con id ${id}`);
}


// todo--------------------------------------------------------------------------------------
// todo------------------------------    exist provider   -----------------------------------
// todo--------------------------------------------------------------------------------------
const existProvider = async (id = '') => {
    const provider = await Provider.findByPk(id);
    if (!provider)
        throw new Error(`No existe el proveedor con id ${id}`);
}


// todo--------------------------------------------------------------------------------------
// todo------------------------------    exist curse   --------------------------------------
// todo--------------------------------------------------------------------------------------
const existCurse = async (id = '') => {
    const curse = await Curse.findByPk(id);
    if (!curse)
        throw new Error(`No existe el curso con id ${id}`);
}


// todo--------------------------------------------------------------------------------------
// todo------------------------------    exist curse_level   --------------------------------
// todo--------------------------------------------------------------------------------------
const existCurse_level = async (id = '') => {
    const curse_level = await Curse_level.findByPk(id);
    if (!curse_level)
        throw new Error(`No existe el nivel de curso con id ${id}`);
}



// todo--------------------------------------------------------------------------------------
// todo------------------------------    exist exam   ---------------------------------------
// todo--------------------------------------------------------------------------------------
const existExam = async (id = '') => {
    const exam = await Exam.findByPk(id);
    if (!exam)
        throw new Error(`No existe el exámen con id ${id}`);
}


// todo--------------------------------------------------------------------------------------
// todo------------------------------    exist news   ---------------------------------------
// todo--------------------------------------------------------------------------------------
const existNews = async (id = '') => {
    const news = await News.findByPk(id);
    if (!news)
        throw new Error(`No existe la noticia con id ${id}`);
}


// todo--------------------------------------------------------------------------------------
// todo------------------------------    exist userName   -----------------------------------
// todo--------------------------------------------------------------------------------------
const existUserName = async (userName = '') => {
    const exist = await User.findAll({ where: { userName } });

    if (exist.length === 0)
        throw new Error(`No existe el usuario ${userName}`);
}


// todo--------------------------------------------------------------------------------------
// todo------------------------------    exist userName   -----------------------------------
// todo--------------------------------------------------------------------------------------
const existUserNameAuth = async (userName = '') => {
    const exist = await User.findAll({ where: { userName } });

    if (exist.length === 1)
        throw new Error(`Ya el usuario ${userName} existe`);
}



// todo--------------------------------------------------------------------------------------
// todo------------------------------    exist Certification_record   -----------------------
// todo--------------------------------------------------------------------------------------
const existCertification_record = async (id = '') => {
    const certification_record = await Certification_record.findByPk(id);
    if (!certification_record)
        throw new Error(`Los datos no están almacenados en la base de datos`);
}







// todo--------------------------------------------------------------------------------------
// todo------------------------------    exist existMembership_provider_request   -----------
// todo--------------------------------------------------------------------------------------
const existMembership_provider_request = async (id = '') => {
    const exist = await Membership_provider_request.findAll({ where: { id } });

    if (!exist)
        throw new Error(`Los datos no están almacenados en la base de datos`)
}




// todo--------------------------------------------------------------------------------------
// todo------------------------------    ci valid   -----------------------------------------
// todo--------------------------------------------------------------------------------------
// const isCiValid = async (ci = '') => {

//     const isValid = (
//         (parseInt(ci.slice(0, 2)) >= 0 && parseInt(ci.slice(0, 2)) <= 99) &&
//         (parseInt(ci.slice(2, 4)) >= 0 && parseInt(ci.slice(2, 4)) <= 12) &&
//         (parseInt(ci.slice(4, 6)) > 0 && parseInt(ci.slice(4, 6)) <= 31)
//     );

//     if (!isValid)
//         throw new Error(`El email: ${email} ya esta registrado`)
// }





module.exports = {
    isRoleValid,
    existEmail,
    existUser,
    existProvider,
    existCurse,
    existExam,
    existCurse_level,
    existUserName,
    existUserNameAuth,
    existCertification_record,
    existMembership_provider_request,
    existNews
    // existCertification,
    // existReservation,
    // existJobApplication,
    // existNotification,
    // existUser_certification,
    // isCiValid,
}