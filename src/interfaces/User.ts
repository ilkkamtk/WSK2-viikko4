import {Document} from 'mongoose';

interface User extends Document {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}

interface UserLogin {
  username: string;
  email: string;
  id: string;
}

interface TokenUser {
  id: string;
  role: 'admin' | 'user';
}

interface UserIdWithToken {
  id: string;
  token: string;
}

export {User, UserLogin, TokenUser, UserIdWithToken};
