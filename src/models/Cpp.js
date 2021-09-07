const { Model, DataTypes } = require('sequelize')

class Cpp extends Model {
    static init(connection) {
        super.init({
            password: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
}

module.exports = Cpp