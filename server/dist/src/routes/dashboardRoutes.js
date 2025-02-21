"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboradController_1 = require("../controllers/dashboradController");
const router = (0, express_1.Router)();
router.get("/", dashboradController_1.getDashboardMetrics);
exports.default = router;
