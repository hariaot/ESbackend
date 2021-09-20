const { Model, DataTypes } = require("sequelize");

class Statement extends Model {
  static init(connection) {
    super.init(
      {
        id_student: DataTypes.INTEGER,
        id_advisor: DataTypes.INTEGER,
        adv_comment: DataTypes.STRING,
        adv_statement: DataTypes.STRING,
        cpp_comment: DataTypes.STRING,
        cpp_statement: DataTypes.STRING,
        id_report: DataTypes.INTEGER,
      },
      {
        sequelize: connection,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Report, { foreignKey: "id_report", as: "report" });
  }
}

module.exports = Statement
