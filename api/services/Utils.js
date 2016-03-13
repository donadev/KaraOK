var requireDir = require("require-dir");
module.exports = {
    // tested in Utils.test.js # findAction
    findAction(path, model, suffix, action) {
        if(!Utils.endsWith(model, "Controller")) model += "Controller";
        if(suffix != null) suffix = "." + suffix;
        var dir;
        try {
            dir = requireDir(path);
        } catch(e) {
            return null;
        }
        var value;
        for(var key in dir) {
            if(this.equalsIgnoreCase(key, model + suffix)) {
                return dir[key][action];
            }
        };
    },
    // tested in Utils.test.js # equalsIgnoreCase
    equalsIgnoreCase(a, b) {
        if(a == null || b == null) return a == b;
        return a.toLowerCase() == b.toLowerCase();
    },
    // tested in Utils.test.js # endsWith
    endsWith(value, pattern) {
        if(value == null || pattern == null) return false;
        return value.substring(value.length - pattern.length) == pattern;
    }
};
