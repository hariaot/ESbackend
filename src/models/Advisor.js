const { Model, DataTypes } = require('sequelize')

class Advisor extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            lattes_url: DataTypes.STRING,
            
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        this.hasMany(models.Student, {foreignKey: 'id_advisor', as: 'students'})
    }
}

module.exports = Advisor