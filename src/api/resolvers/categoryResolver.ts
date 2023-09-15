// TODO: categoryResolver
import {Category} from '../../interfaces/Category';
import {Species} from '../../interfaces/Species';
import categoryModel from '../models/categoryModel';

export default {
  Species: {
    category: async (parent: Species) => {
      console.log(parent);
      return await categoryModel.findById(parent.category);
    },
  },
  Query: {
    categories: async () => {
      return await categoryModel.find();
    },
    categoryById: async (_parent: undefined, args: {id: string}) => {
      return await categoryModel.findById(args.id);
    },
  },
  Mutation: {
    addCategory: async (_parent: undefined, args: Category) => {
      console.log(args);
      const newCategory = new categoryModel(args);
      return await newCategory.save();
    },
    updateCategory: async (_parent: undefined, args: Category) => {
      console.log(args);
      return await categoryModel.findByIdAndUpdate(args.id, args, {
        new: true,
      });
    },
    deleteCategory: async (_parent: undefined, args: {id: string}) => {
      return await categoryModel.findByIdAndDelete(args.id);
    },
  },
};
