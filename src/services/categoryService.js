import data from '../data/categorias.json';

export  async function getCategories(){
  return  await data.categorias;
}

