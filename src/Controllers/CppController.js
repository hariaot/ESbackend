const Cpp = require('../models/Cpp');


module.exports = {
    async create(req, res) {
        const {  email, password} = req.body;
        try {
            const cpp = await Cpp.create({ email, password });
            return res.json(cpp);

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }
    },

    async read(req, res) {
        try {
            const result = await Cpp.findAll({
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
        const { email, password} = req.body;
        try {
            const cpp = await Cpp.findByPk(req.params.id_cpp);
            if (!cpp)
                return res.status(404).send({ msg: 'not found' });
            await cpp.update({ email, password });
            return res.status(200).send({ msg: 'cpp updated' });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }
    },

    async delete(req, res) {
        const cpp = await Cpp.findByPk(req.params.id_cpp);
        try {
            await cpp.destroy();
            return res.status(200).send({ msg: 'cpp deleted' });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }

    }
}