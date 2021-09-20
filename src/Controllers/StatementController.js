const Statement = require('../models/Statement');

module.exports = {
    async create(req, res) {
        const { id_student, id_advisor, adv_comment, adv_statement, cpp_comment, cpp_statement, id_report } = req.body;
        try {
            const report = await Statement.create({ id_student, id_advisor, adv_comment, adv_statement, cpp_comment, cpp_statement, id_report });
            return res.json(report);

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }
    },

    async read(req, res) {
        try {
            const result = await Statement.findAll({
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
        const { id_student, id_advisor, adv_comment, adv_statement, cpp_comment, cpp_statement, id_report  } = req.body;
        try {
            const statement = await Statement.findByPk(req.params.id_statement);
            if (!statement)
                return res.status(404).send({ msg: 'not found' });
            await statement.update({ id_student, id_advisor, adv_comment, adv_statement, cpp_comment, cpp_statement, id_report});
            return res.status(200).send({ msg: 'report updated' });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }
    },

    async delete(req, res) {
        const statement = await Statement.findByPk(req.params.id_statement);
        try {
            await statement.destroy();
            return res.status(200).send({ msg: 'report deleted' });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }

    }
}