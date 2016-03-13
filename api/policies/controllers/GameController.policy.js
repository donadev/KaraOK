module.exports = {
    beginMatch(request, response, cb) {
        //REMEMBER TO UNCOMMENT THIS, NOW FOR TEST PURPOSES IS COMMENTED
        /*if(request.session)*/ cb(); /*
        else return response.forbidden();*/
    }
};
