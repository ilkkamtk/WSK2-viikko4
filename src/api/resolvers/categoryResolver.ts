// TODO: categoryResolver
import {Category} from '../../interfaces/Category';
import categoryModel from '../models/categoryModel';

export default {
  Query: {
    categories: async () => {
      return await categoryModel.find();
    },
  },
};
