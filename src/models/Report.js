const { Model, DataTypes } = require("sequelize");

class Report extends Model {
  static init(connection) {
    super.init(
      {
        content: DataTypes.STRING,
        id_student: DataTypes.INTEGER
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: "id_student", as: "student" });
    this.hasMany(models.Statement,{foreignKey: "id_report", as: "report"});
  }
}

module.exports = Report
