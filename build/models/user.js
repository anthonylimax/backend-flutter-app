"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(about, name, id, email, password, user_public_id) {
        this.about = about;
        this.name = name;
        this.id = id;
        this.email = email;
        this.password = password;
        this.user_public_id = user_public_id;
    }
    Object.defineProperty(User.prototype, "User_public_id", {
        get: function () {
            return this.user_public_id;
        },
        set: function (value) {
            this.user_public_id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Password", {
        get: function () {
            return this.password;
        },
        set: function (value) {
            this.password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Email", {
        get: function () {
            return this.email;
        },
        set: function (value) {
            this.email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Id", {
        get: function () {
            return this.id;
        },
        set: function (value) {
            this.id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "About", {
        get: function () {
            return this.about;
        },
        set: function (value) {
            this.about = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.default = User;
