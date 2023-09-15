import {Document} from 'mongoose';
import {Species} from './Species';

interface Animal extends Document {
  animal_name: string;
  species: Species;
  birthdate: Date;
  gender: 'Female' | 'Male';
}

interface TestAnimal {
  id?: string;
  animal_name: string;
  species: string;
  birthdate: Date;
}

export {Animal, TestAnimal};
