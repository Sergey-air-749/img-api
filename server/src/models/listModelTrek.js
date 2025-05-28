const mongoose = require("mongoose")

const listShema = new mongoose.Schema({
    alibomName: {
        type: String,
        required: true,
        unique: true
    },
    alibomExecutor: {
        type: String,
        required: true
    },
    alibomDateRelease: {
        type: String,
        required: true
    },
    alibomCover: {
        type: Object,
        required: true
    },
    trekList: {
        type: Array,
        required: true
    }
})

const ListAlibom = mongoose.model("lists", listShema)
module.exports = ListAlibom