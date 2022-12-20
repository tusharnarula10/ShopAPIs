module.exports = (sequelize:any, Sequelize:any) => {
    const products = sequelize.define("products", {
      id: {
        type: Sequelize.INTEGER(10),
        primaryKey: true,
        autoIncrement:true
      },
      title: {
        type: Sequelize.STRING(100)
      },
      description: {
        type: Sequelize.STRING(250)
      },
      picture: {
        type: Sequelize.STRING(500)
      },
      price: {
        type: Sequelize.INTEGER(10)
      },
      quantity: {
        type: Sequelize.INTEGER(10)
      },
      
    });
  
    return products;
  };