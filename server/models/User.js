import { DataTypes as Dt, Model } from 'sequelize'
import { db } from '../../database/db.js'

class User extends Model {}

User.init(
  {
    name: {
      type: Dt.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: Dt.STRING(50),
      allowNull: false,
    },
    email: {
      type: Dt.STRING(50),
      allowNull: false,
    },
    password: {
      type: Dt.STRING(20),
      allowNull: false,
    },
    role: {
      type: Dt.STRING(10),
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'user', timestamps: false }
)

export default User
