import { DataTypes as Dt, Model } from 'sequelize'
import { db } from '../../database/db.js'

class Product extends Model {}

Product.init(
  {
    name: {
      type: Dt.STRING(50),
      allowNull: false,
    },
    description: {
      type: Dt.TEXT,
      allowNull: false,
    },
    price: {
      type: Dt.DECIMAL(10, 2),
      allowNull: false,
    },
    stock: {
      type: Dt.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'Product',
    timestamps: false,
  }
)
// console.log(Product === db.models.Product)

export default Product
