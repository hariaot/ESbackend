const Report = require('../models/Report');


module.exports = {
    async create(req, res) {
        const { content, id_student} = req.body;
        try {
            const report = await Report.create({ content, id_student});
            return res.json(report);

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }
    },

    async read(req, res) {
        try {
            const result = await Report.findAll({
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
        const { content, id_student } = req.body;
        try {
            const report = await Report.findByPk(req.params.id_report);
            if (!report)
                return res.status(404).send({ msg: 'not found' });
            await report.update({ content, id_student});
            return res.status(200).send({ msg: 'report updated' });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }
    },

    async delete(req, res) {
        const report = await Report.findByPk(req.params.id_report);
        try {
            await report.destroy();
            return res.status(200).send({ msg: 'report deleted' });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }

    }
}