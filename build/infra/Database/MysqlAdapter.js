"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySqlAdapter = void 0;
var mysql2_1 = __importDefault(require("mysql2"));
var MySqlAdapter = /** @class */ (function () {
    function MySqlAdapter() {
    }
    MySqlAdapter.prototype.verifyLogin = function (data, response) {
        return __awaiter(this, void 0, void 0, function () {
            var globalConnection;
            return __generator(this, function (_a) {
                try {
                    globalConnection = mysql2_1.default.createConnection(process.env.DATABASE_URL || "");
                    globalConnection.query("SELECT about, name, user_public_id FROM User where email = ? and password = ?", [data.email, data.password], function (err, result, fields) {
                        if (result[0] != undefined) {
                            console.log("here 1");
                            response.send(result[0]);
                        }
                        else {
                            console.log("here 2");
                            response.send({ error: true });
                        }
                    });
                }
                catch (e) { }
                return [2 /*return*/];
            });
        });
    };
    MySqlAdapter.prototype.getEvents = function (response, id_public_user) {
        var globalConnection = mysql2_1.default.createConnection(process.env.DATABASE_URL || "");
        var data = [];
        console.log(id_public_user);
        globalConnection.query("select * from Event as e", function (error, result, fields) {
            var data = result;
            globalConnection.query("select * from Favorites where user_public_id = ?", [id_public_user], function (errSecond, resultSecond, fieldsSecond) {
                var index = 0;
                data.forEach(function (element) {
                    data[index] = __assign(__assign({}, element), { isSelected: false });
                    index++;
                });
                index = 0;
                result.forEach(function (element) {
                    resultSecond.forEach(function (elementTwo) {
                        if (elementTwo.id_event == element.forum_public_id) {
                            data[index] = __assign(__assign({}, element), { isSelected: true });
                        }
                    });
                    index++;
                });
                response.json(data);
            });
        });
    };
    MySqlAdapter.prototype.giveForum = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var globalConnection;
            return __generator(this, function (_a) {
                try {
                    globalConnection = mysql2_1.default.createConnection(process.env.DATABASE_URL || "");
                    globalConnection.query("SELECT * FROM Forum", function (error, result, fields) {
                        var res = result[0];
                        response.send(res);
                    });
                }
                catch (e) {
                    response.send(e);
                }
                return [2 /*return*/];
            });
        });
    };
    MySqlAdapter.prototype.DeletingFavorite = function (response, data) {
        return __awaiter(this, void 0, void 0, function () {
            var user_public_id, id_event, globalConnection;
            return __generator(this, function (_a) {
                user_public_id = data.user_public_id, id_event = data.id_event;
                globalConnection = mysql2_1.default.createConnection(process.env.DATABASE_URL || "");
                globalConnection.query("delete from Favorites where id_event = ? and user_public_id = ?", [id_event, user_public_id]);
                response.status(200).json();
                return [2 /*return*/];
            });
        });
    };
    MySqlAdapter.prototype.AddingFavorite = function (response, data) {
        return __awaiter(this, void 0, void 0, function () {
            var user_public_id, id_event, globalConnection;
            return __generator(this, function (_a) {
                user_public_id = data.user_public_id, id_event = data.id_event;
                globalConnection = mysql2_1.default.createConnection(process.env.DATABASE_URL || "");
                globalConnection.query("insert into Favorites(id_event, user_public_id) values (? , ?)", [id_event, user_public_id]);
                response.status(200).json();
                return [2 /*return*/];
            });
        });
    };
    MySqlAdapter.prototype.giveInbox = function () {
        throw new Error("Method not implemented.");
    };
    MySqlAdapter.prototype.giveInterest = function (response) {
        try {
            var globalConnection = mysql2_1.default.createConnection(process.env.DATABASE_URL || "");
            globalConnection.query("SELECT * FROM Interests", function (error, result, fields) {
                response.json(result);
            });
        }
        catch (e) {
            response.send(e);
        }
    };
    MySqlAdapter.prototype.setImage = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    MySqlAdapter.prototype.giveMessages = function (inbox_public_id) {
        throw new Error("Method not implemented.");
    };
    MySqlAdapter.prototype.giveRelUserAndEvent = function (id_public_user) {
        throw new Error("Method not implemented.");
    };
    MySqlAdapter.prototype.getFavorites = function (id_public_user, response) {
        return __awaiter(this, void 0, void 0, function () {
            var globalConnection, data;
            return __generator(this, function (_a) {
                globalConnection = mysql2_1.default.createConnection(process.env.DATABASE_URL || "");
                data = [];
                globalConnection.query("select e.description, e.event_data, e.organizer, e.name, e.localizacao from Favorites as f join User as u on f.user_public_id = ? join Event as e on e.forum_public_id = f.id_event;", [id_public_user], function (error, result, fields) {
                    console.log(result);
                    response.json(result);
                });
                return [2 /*return*/];
            });
        });
    };
    MySqlAdapter.instance = new MySqlAdapter();
    return MySqlAdapter;
}());
exports.MySqlAdapter = MySqlAdapter;
