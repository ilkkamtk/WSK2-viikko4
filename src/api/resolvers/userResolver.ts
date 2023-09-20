export default {
  Query: {
    users: async () => {
      const response = await fetch(`${process.env.AUTH_URL}/users`);
      const users = await response.json();
      console.log(users);
      return users.data;
    },
  },
};
