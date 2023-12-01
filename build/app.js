"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = require("./infra/express/routes");
var config = (0, express_1.default)();
config.use(express_1.default.json());
config.use((0, cors_1.default)());
(0, routes_1.RoutingDataBase)(config);
exports.default = config;
