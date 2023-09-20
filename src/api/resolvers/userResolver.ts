export default {
  Query: {
    users: async () => {
      console.log(`${process.env.AUTH_URL}/users`);
      const response = await fetch(`${process.env.AUTH_URL}/users`);
      const users = await response.json();
      return users;
    },
  },
};
