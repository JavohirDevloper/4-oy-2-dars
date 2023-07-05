const posts = [
    {
      id: 1,
      title: "Dasturlashdan ilk maoshingni olganingda?",
      content: 40,
      user_id: 1,
    },
    {
      id: 2,
      title: "Dasturlashga ishga kirsam?",
      content: 20,
      user_id: 2
    },
    {
      id: 3,
      title: "Bir kun kvartirada bir o'zing yashasang?",
      content: 20,
      user_id: 2
    }
  ];
  
  const users = [
    {
      id: 1,
      name: "Javohir"
    },
    {
      id: 2,
      name: "Orzu"
    },
  ];
  
  const comments = [
    {
      id: 1,
      text: "Mendan baxtli odamni o'zi yo'q :)",
      user_id: 2,
      post_id: 1,
    },
    {
      id: 2,
      text: "Uydagilar xursand bo'ladi endi soqqani qilaman :)",
      user_id: 1,
      post_id: 2,
    },
    {
      id: 3,
      text: "Ovqatsizlik, wifi yuqligi odamni o'limdan battar ahvolga olib keladi :(",
      user_id: 1,
      post_id: 3,
    }
  ];
  
  const resolvers = {
    Query: {
      posts: () => posts,
      users: () => users,
      comments: () => comments,
    },
    Post: {
      user: (parent) => {
        return users.find(user => user.id === parent.user_id);
      },
      comments: (parent) => {
        return comments.filter(comment => comment.post_id === parent.id);
      }
    },
    User: {
      posts: (parent) => {
        return posts.filter(post => post.user_id === parent.id);
      }
    },
    Comment: {
      user: (parent) => {
        return users.find(user => user.id === parent.user_id);
      },
      post: (parent) => {
        return posts.find(post => post.id === parent.post_id);
      },
    }
  };
  
  export default resolvers;