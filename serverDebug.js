const production = false
const requireAdminLogin = true

// Debug
RequireLoginDebug = require("debug")("Require-Login")

module.exports = {
    getRequireAdminLogin: function() {
        if (production) {
            RequireLoginDebug("Production == true. returin true")
            return true
        }
        if (process.env.REQUIRE_ADMIN_LOGIN == "false") {
        	return false
        } else if (process.env.REQUIRE_ADMIN_LOGIN == "true") {
        	return true
        }
        return requireAdminLogin
    }
}
