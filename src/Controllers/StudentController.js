const Student = require('../models/Student');


module.exports = {
    async create(req, res) {
        const { name, email, password, usp_number, lattes_url, lattes_mddate, id_advisor } = req.body;
        try {
            const advisor = await Student.create({ name, email, password, usp_number, lattes_url, lattes_mddate, id_advisor });
            return res.json(advisor);

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }
    },

    async read(req, res) {
        try {
            const result = await Student.findAll({
                attributes: { exclude: ['password'] }
            });

            if (result.length === 0)
                return res.status(404).send({ msg: 'not found' });

            return res.status(200).send(result);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }
    },

    async update(req, res) {
        const { name, email, password, usp_number, lattes_url, lattes_mddate, id_advisor } = req.body;
        try {
            const student = await Student.findByPk(req.params.id_student);
            if (!advisor)
                return res.status(404).send({ msg: 'not found' });
            await student.update({ name, email, password,usp_number, lattes_url, lattes_mddate, id_advisor });
            return res.status(200).send({ msg: 'student updated' });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }
    },

    async delete(req, res) {
        const student = await Student.findByPk(req.params.id_student);
        try {
            await student.destroy();
            return res.status(200).send({ msg: 'student deleted' });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }

    }
}