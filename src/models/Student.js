const { Model, DataTypes } = require('sequelize')

class Student extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            usp_number: DataTypes.INTEGER,
            lattes_url: DataTypes.STRING,
            lattes_mddate: DataTypes.DATE,
            id_advisor: DataTypes.INTEGER,
            
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        this.belongsTo(models.Advisor, { foreignKey: "id_advisor", as: "advisor" });
        this.hasMany(models.Report, {foreignKey: 'id_student', as: 'reports'})
    }
}

module.exports = Student
