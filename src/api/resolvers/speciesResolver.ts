// TODO: speciesResolver
import {Species} from '../../interfaces/Species';
import speciesModel from '../models/speciesModel';

export default {
  Query: {
    species: async () => {
      return await speciesModel.find();
    },
    speciesById: async (_parent: undefined, args: {id: String}) => {
      return await speciesModel.findById(args.id);
    },
  },
};
