import { DataTypes as Dt, Model } from 'sequelize'
import { db } from '../../database/db.js'

class Category extends Model {}

Category.init(
  {
    id: {
      type: Dt.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Dt.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'Category',
  }
)

console.log(Category === db.models.Category)

export default Category
