const Advisor = require('../models/Advisor');


module.exports = {
    async create(req, res) {
        const { name, email, password, lattes_url } = req.body;
        try {
            const advisor = await Advisor.create({ name, email, password, lattes_url });
            return res.json(advisor);

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }
    },

    async read(req, res) {
        try {
            const result = await Advisor.findAll({
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
        const { name, email, password, lattes_url } = req.body;
        try {
            const advisor = await Advisor.findByPk(req.params.id_advisor);
            if (!advisor)
                return res.status(404).send({ msg: 'not found' });
            await advisor.update({ name, email, lattes_url, password });
            return res.status(200).send({ msg: 'advisor updated' });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }
    },

    async delete(req, res) {
        const advisor = await Advisor.findByPk(req.params.id_advisor);
        try {
            await advisor.destroy();
            return res.status(200).send({ msg: 'advisor deleted' });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }

    }
}