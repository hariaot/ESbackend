const { Model, DataTypes } = require('sequelize')

class Cpp extends Model {
    static init(connection) {
        super.init({
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
}

module.exports = Cpp