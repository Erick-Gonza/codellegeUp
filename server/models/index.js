import Category from './Category.js'
import Product from './Product.js'

Category.hasMany(Product, {
  foreignKey: {
    field: 'categoryId',
  },
  onDelete: 'CASCADE',
})
Product.belongsTo(Category)

export { Category, Product }
