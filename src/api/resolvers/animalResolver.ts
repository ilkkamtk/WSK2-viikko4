import {Animal} from '../../interfaces/Animal';
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
  },
};
