/**
 * GameController
 *
 * @description :: Server-side logic for managing games
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	beginMatch(request, response) {
		User.getRandom().then((users) => {
			if(_.isEmpty(users)) response.notFound("No user available");
			else response.ok(users[0]);
		}).catch(response.serverError);
	}
};
