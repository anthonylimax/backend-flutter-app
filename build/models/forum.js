"use strict";
// CREATE TABLE `Forum` (
//     + `name` varchar(60),
//     + `id` int NOT NULL AUTO_INCREMENT,
//     + `description` varchar(300) NOT NULL,
//     + `event_data` int NOT NULL,
//     + `organizer` varchar(40) NOT NULL,
//     + `forum_public_id` varchar(40) NOT NULL,
//     + PRIMARY KEY (`id`)
//     + ) ENGINE InnoDB,
//     + CHARSET utf8mb4,
//     + COLLATE utf8mb4_0900_ai_ci;
Object.defineProperty(exports, "__esModule", { value: true });
var Forum = /** @class */ (function () {
    function Forum(forum_public_id, name, id, event_data, organizer, description) {
        this.forum_public_id = forum_public_id;
        this.name = name;
        this.id = id;
        this.event_data = event_data;
        this.organizer = organizer;
        this.description = description;
    }
    Object.defineProperty(Forum.prototype, "Forumpublicid", {
        get: function () {
            return this.forum_public_id;
        },
        set: function (value) {
            this.forum_public_id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Forum.prototype, "Eventdata", {
        get: function () {
            return this.event_data;
        },
        set: function (value) {
            this.event_data = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Forum.prototype, "Organizer", {
        get: function () {
            return this.organizer;
        },
        set: function (value) {
            this.organizer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Forum.prototype, "Id", {
        get: function () {
            return this.id;
        },
        set: function (value) {
            this.id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Forum.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Forum.prototype, "Description", {
        get: function () {
            return this.description;
        },
        set: function (value) {
            this.description = value;
        },
        enumerable: false,
        configurable: true
    });
    Forum.prototype.fromJson = function (obj) {
        return new Forum(obj.forum_public_id, obj.name, obj.id, obj.event_data, obj.organizer, obj.description);
    };
    return Forum;
}());
exports.default = Forum;
