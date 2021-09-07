const { Model, DataTypes } = require("sequelize");

class Statement extends Model {
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
    this.belongsTo(models.Cpp, { foreignKey: "id", as: "cpp" });
  }
}

module.exports = Statement
