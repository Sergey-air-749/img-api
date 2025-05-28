const express = require("express")
const router = express.Router()

const {
    getAllAliboms,
    getAlibomId,
    setNewAlibom,
} = require("../Controllers/listsController")

router.get("/getAllAliboms", getAllAliboms)
router.get("/getAlibomId/:id", getAlibomId)
router.post("/setNewAlibom", setNewAlibom)

module.exports = router