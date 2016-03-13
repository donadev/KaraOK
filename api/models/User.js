/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      username: {type: "string", required: true},
      games: {collection: "game"}
  },
  getRandom() {
      var self = this;
      return this.count().then((value) => {
          var random = Math.floor(Math.random() * value);
          if(random < 0) random = 0;

          return self.find({skip: random, limit: 1});
      });
  }
};
