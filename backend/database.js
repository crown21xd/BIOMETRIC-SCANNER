let users = [];

export const db = {
  users,

  getUsers: () => {
    return users;
  },
  addUser: (user) => {
    users.push(user);
  },
  findUser: (studentNumber) => {
    return users.find((user) => user.studentNumber === studentNumber);
  },
  removeUser: (studentNumber) => {
    const index = users.findIndex((user) => user.studentNumber === studentNumber);
    if (index !== -1) {
      users.splice(index, 1);
      return true;
    }
    return false;
  },
};
