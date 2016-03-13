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
  getRandom(user_id) {
      var self = this;
      return this.count().then((value) => {
          var random = Math.floor(Math.random() * value);
          if(random < 0) random = 0;
          let params = {skip: random};
          if(user_id != null) params.where = {"!": {id: user_id}};
          return self.find(params);
      });
  }
};
