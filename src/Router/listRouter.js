const express = require("express")
const router = express.Router()

const {
    registration,
    login,
    getUserId,
    getAllUsers,
    posts
} = require("../Controllers/listsController")

router.post("/registration", registration)
router.post("/login", login)
router.get("/getUserId/:id", getUserId)
router.get("/getAllUsers", getAllUsers)
router.get("/posts", posts)


module.exports = router