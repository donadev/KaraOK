module.exports = {
    beginMatch(request, response, cb) {
        console.log("Policies", "beginMatch");
        if(request.session) cb();
        else return response.forbidden();
    }
};
