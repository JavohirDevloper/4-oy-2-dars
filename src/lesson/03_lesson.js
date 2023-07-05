const groups = [
  {
    id: 1,
    name: "Web Dasturlash N82",
  },
  {
    id: 2,
    name: "NodeJS N7",
  },
  {
    id: 3,
    name: "ReactJS N64",
  },
];

const users = [
  {
    id: 1,
    first_name: "Javohir",
    last_name: "Rahimov",
  },
  {
    id: 2,
    first_name: "Doston",
    last_name: "Davalatov",
  },
  {
    id: 3,
    first_name: "E'zozbek",
    last_name: "Hamidov",
  }
];

const group_users = [
  {
    id: 1,
    group_id: 1,
    user_id: 1,
  },
  {
    id: 2,
    group_id: 1,
    user_id: 2,
  },
  {
    id: 3,
    group_id: 2,
    user_id: 3,
  }
];

const resolvers = {
  Query: {
    users: () => users,
    groups: () => groups,
  },
  User: {
    groups: (parent) => {
      const lesson = group_users.find((item) => item.user_id === parent.id);
      return groups.filter((group) => group.id === lesson.group_id);
    },
    full_name: (parent) => `${parent.first_name} ${parent.last_name}`,
  },
  Group: {
    users: (parent) => {
      const lesson = group_users.filter(
        (item) => item.group_id === parent.id
      );

      return users.filter((user) => {
        return lesson.find((item) => item.user_id === user.id);
      });
    },
  },
};

export default resolvers;
