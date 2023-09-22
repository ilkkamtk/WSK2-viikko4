import {Animal} from '../../interfaces/Animal';
import {MyContext} from '../../interfaces/MyContext';
import animalModel from '../models/animalModel';

// TODO: animalResolver
export default {
  Query: {
    animals: async () => {
      return await animalModel.find();
    },
    animalById: async (_parent: undefined, args: {id: string}) => {
      return await animalModel.findById(args.id);
    },
  },
  Mutation: {
    addAnimal: async (_parent: undefined, args: Animal) => {
      console.log(args);
      const animal = new animalModel(args);
      return await animal.save();
    },
    updateAnimal: async (_parent: undefined, args: Animal) => {
      return await animalModel.findByIdAndUpdate(args.id, args, {
        new: true,
      });
    },
    deleteAnimal: async (_parent: undefined, args: {id: string}) => {
      return await animalModel.findByIdAndDelete(args.id);
    },
  },
};
