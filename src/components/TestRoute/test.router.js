/**
 * Defines the test router.
 *
 * @type {Router}
 * The purpose of this component is to provide a basic
 * test route for connectivity verification.
 */

const router = require("express").Router();
const controller = require("./test.controller");
const methodNotAllowed = require("../../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
