const express = require("express")
const router = express.Router()

const {
    registration,
    login,
    getUserId,
    getAllUsers,
    randomPosts,
    getPostId
} = require("../Controllers/listsController")

router.post("/registration", registration)
router.post("/login", login)
router.get("/getUserId/:id", getUserId)
router.get("/getAllUsers", getAllUsers)
router.get("/randomPosts", randomPosts)
router.get("/getPostId/:userId/:postId", getPostId)


module.exports = router