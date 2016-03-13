/**
 * GameController
 *
 * @description :: Server-side logic for managing games
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	beginMatch(request, response) {
		User.getRandom().then(response.ok).catch(response.error);
	}
};
