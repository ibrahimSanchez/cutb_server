const { response, request } = require('express');
const { Certification_record } = require('../models/certification_record');


// todo--------------------------------------------------------------------------------------
// todo------------------------------    get   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
const certification_recordsGet = async (req = request, res = response) => {

    const q = { where: { state: true } };

    try {
        const [total, certification_records] = await Promise.all([
            Certification_record.count(q),
            Certification_record.findAll({
                order: ['id'],
                where: { state: true }
            })
        ]);

        res.json({
            total,
            certification_records
        });
    } catch (error) {
        console.log('error en el get', error)
    }
}


// todo--------------------------------------------------------------------------------------
// todo------------------------------    post   ---------------------------------------------
// todo--------------------------------------------------------------------------------------
const certification_recordPost = async (req = request, res = response) => {

    const { name, date, certification, level } = req.body;
    const certification_record = new Certification_record({ name, date, certification, level });

    try {
        await certification_record.save();
        res.json({
            msg: 'Operación exitosa',
            certification_record
        })
    } catch (error) {
        console.log('error en el post', error)
    }
}


// todo--------------------------------------------------------------------------------------
// todo------------------------------    put   ----------------------------------------------
// todo--------------------------------------------------------------------------------------
const certification_recordPut = async (req = request, res = response) => {

    const { id } = req.params;
    const { id: i, ...rest } = req.body;

    try {
        const certification_record = await Certification_record.findByPk(id);
        Object.assign(certification_record, rest);
        await certification_record.save();

        res.json({
            msg: 'Operación exitosa',
            certification_record
        });

    } catch (error) {
        console.log('error en el put', error)
    }
}



// todo--------------------------------------------------------------------------------------
// todo------------------------------    delete   -------------------------------------------
// todo--------------------------------------------------------------------------------------
const certification_recordDelete = async (req = request, res = response) => {

    const { id } = req.params;

    const { user: userAuth } = req;

    try {
        const certification_record = await Certification_record.findByPk(id);
        if (certification_record.state) {
            certification_record.state = false;
            await certification_record.save();

            res.json({
                msg: 'Operación exitosa',
                certification_record,
                userAuth
            });
        } else
            res.status(404).json({
                msg: 'Datos no encontrados en la base de datos'
            });

    } catch (error) {
        console.log('error en el delete', error)
    }
}





module.exports = {
    certification_recordsGet,
    certification_recordPost,
    certification_recordPut,
    certification_recordDelete,
};