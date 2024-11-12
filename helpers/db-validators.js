const { User } = require("../models/user");
const { Role } = require("../models/role");
const { Provider } = require("../models/provider");
const { Curse } = require("../models/curse");
const { Exam } = require("../models/exam");


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
// todo------------------------------    exist provider   ------------------------------
// todo--------------------------------------------------------------------------------------
const existProvider = async (id = '') => {
    const provider = await Provider.findByPk(id);
    if (!provider)
        throw new Error(`No existe el proveedor con id ${id}`);
}


// todo--------------------------------------------------------------------------------------
// todo------------------------------    exist curse   --------------------------------
// todo--------------------------------------------------------------------------------------
const existCurse = async (id = '') => {
    const curse = await Curse.findByPk(id);
    if (!curse)
        throw new Error(`No existe el curso con id ${id}`);
}



// todo--------------------------------------------------------------------------------------
// todo------------------------------    exist exam   -----------------------------
// todo--------------------------------------------------------------------------------------
const existExam = async (id = '') => {
    const exam = await Exam.findByPk(id);
    if (!exam)
        throw new Error(`No existe el exámen con id ${id}`);
}


// todo--------------------------------------------------------------------------------------
// todo------------------------------    exist jobApplication   -----------------------------
// todo--------------------------------------------------------------------------------------
// const existNotification = async (id = '') => {
//     const notification = await Notification.findByPk(id);
//     if (!notification)
//         throw new Error(`No existe la notificación con id ${id}`);
// }




// todo--------------------------------------------------------------------------------------
// todo------------------------------    exist user_certification   -------------------------
// todo--------------------------------------------------------------------------------------
// const existUser_certification = async (id = '') => {
//     const user_certification = await User_certification.findByPk(id);
//     if (!user_certification)
//         throw new Error(`No existe la notificación con id ${id}`);
// }







// todo--------------------------------------------------------------------------------------
// todo------------------------------    exist ci   -----------------------------------------
// todo--------------------------------------------------------------------------------------
// const existCi = async (ci = '') => {
//     const exist = await User.findAll({ where: { ci } });

//     if (exist.length > 0)
//         throw new Error(`El email: ${ci} ya esta registrado`)
// }




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
    existExam
    // existCertification,
    // existReservation,
    // existJobApplication,
    // existNotification,
    // existUser_certification,
    // isCiValid,
}