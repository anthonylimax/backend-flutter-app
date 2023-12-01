"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloud = void 0;
var cloudinary_1 = require("cloudinary");
var Cloud = /** @class */ (function () {
    function Cloud() {
    }
    Cloud.prototype.add = function () {
        cloudinary_1.v2.config({
            cloud_name: 'dnnhfgiu5',
            api_key: '714273354475597',
            api_secret: 'KzH6qSD52yXm_I8yexXBhIzXPQw'
        });
        cloudinary_1.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg", { public_id: "olympic_flag" });
    };
    return Cloud;
}());
exports.Cloud = Cloud;
