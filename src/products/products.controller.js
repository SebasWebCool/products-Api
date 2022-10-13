const uuid = require("uuid");
const Products = require("../models/product.models");

const getAllProducts = () => {
  const data = Products.findAll(); //? Traer todas las peliculas
  //? Select * from movies;
  return data;
};


// getAllMovies()
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))

const createProduct = async (data) => {
  const newMovie = await Products.create({
    id: uuid.v4(),
    name: data.name,
    category: data.category,
    price: data.price,
    isAvailable: data.isAvailable,
  });
  //? insert into Products (id, name, category, price, releaseDate) values (uuid.v4(), data.name, data.genre, data.duration, data.releaseDate)
  return newMovie;
};

const getProductById = async (id) => {
  const data = await Products.findOne({
    where: {
      id,
    },
  });
  //? Select * from Products where id = id;
  return data; //? Si el where no encuentra nada, retorna null
};
// getMovieById('1b8f45e5-a35b-4397-818b-c4f3c5897fkq')
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))



const editProduct = async (id, data) => {
  const response = await Products.update(data, {
    where: {
      id: id,
    },
  });
  return response;//? Si el where no encuentra nada, retorna null
};

// editMovie("g3584168-55cd-480f-7e55-c5gee59b5824", {
//   price: "test",
//   name:""
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const deleteProduct = async (id) => {
    const data = await Products.destroy({
        where: {
            id: id
        }
    })
    return data
}


module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  editProduct,
  deleteProduct
};