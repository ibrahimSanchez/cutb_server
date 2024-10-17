const { User } = require("../models/user");
const { Role } = require("../models/role");
// const { Certification } = require("../models/certification");
// const { Reservation } = require("../models/reservation");
// const { JobApplication } = require("../models/jobApplication");
// const { Notification } = require("../models/notification");
// const { User_certification } = require("../models/user_certification");


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
// todo------------------------------    exist certification   ------------------------------
// todo--------------------------------------------------------------------------------------
// const existCertification = async (id = '') => {
//     const certification = await Certification.findByPk(id);
//     if (!certification)
//         throw new Error(`No existe la certificación con id ${id}`);
// }


// todo--------------------------------------------------------------------------------------
// todo------------------------------    exist reservation   --------------------------------
// todo--------------------------------------------------------------------------------------
// const existReservation = async (id = '') => {
//     const reservation = await Reservation.findByPk(id);
//     if (!reservation)
//         throw new Error(`No existe la reservacion con id ${id}`);
// }



// todo--------------------------------------------------------------------------------------
// todo------------------------------    exist jobApplication   -----------------------------
// todo--------------------------------------------------------------------------------------
// const existJobApplication = async (id = '') => {
//     const jobApplication = await JobApplication.findByPk(id);
//     if (!jobApplication)
//         throw new Error(`No existe la solicitud de trabajo con id ${id}`);
// }


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
    // existCertification,
    // existReservation,
    // existJobApplication,
    // existNotification,
    // existUser_certification,
    // isCiValid,
}