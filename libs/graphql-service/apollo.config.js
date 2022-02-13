module.exports = {
  client: {
    includes: [__dirname + '/libs/graphql-service/src/**/*.ts'],
    service: {
      name: 'blog',
      url: 'https://alamos-be.herokuapp.com/graphql'
    }
  }
};
