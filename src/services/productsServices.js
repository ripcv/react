import data from '../data/productos.json';

export  async function getProducts(){
  return  await data;
}
