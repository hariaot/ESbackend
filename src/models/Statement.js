const { Model, DataTypes } = require("sequelize");

class Statement extends Model {
  static init(connection) {
    super.init(
      {
        id_students: DataTypes.INTEGER,
        id_advisors: DataTypes.INTEGER,
        adv_comment: DataTypes.STRING,
        adv_statement: DataTypes.STRING,
        cpp_comment: DataTypes.STRING,
        cpp_statement: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }
}

module.exports = Statement
