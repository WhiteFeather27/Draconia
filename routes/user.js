"use strict";
Object.defineProperty(exports, "__esModule", { value: true });    "clean": "shx rm -rf assets/webui/ node_modules/go-ipfs/bin",
    "build": "run-s clean build:webui",
    "build:webui": "run-s build:webui:*",
    "build:webui:download": "npx ipfs-or-gateway -c bafybeihcyruaeza7uyjd6ugicbcrqumejf6uf353e5etdkhotqffwtguva -p assets/webui/ -t 360000 --verbose --clean",
    "build:webui:minimize": "shx rm -rf assets/webui/static/js/*.map && shx rm -rf assets/webui/static/css/*.map",
    "package": "shx rm -rf dist/ && run-s build && electron-builder --publish onTag"
/*
 * GET users listing.
 */
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.send("respond with a resource");
});
exports.default = router;
//# sourceMappingURL=user.js.map