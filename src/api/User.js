const fakeUsers = {
  name: 'John',
  age: 28,
  hobbies: ['game', 'film', 'code'],
};

export default class User {
  static getUserData = () => new Promise(resolve => {
    setTimeout(() => {
      resolve(fakeUsers);
    }, 1000);
  });
}
