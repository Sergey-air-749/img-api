const User = require("../models/userModel")

const getAllUsers = async (req, res) => {
    try {
        console.log("!");
        const lists = await User.find()

        res.json(lists)
    } catch (error) {
        console.error(error);
    }
}

const getUserId = async (req, res) => {
    const { id } = req.params
    try {
        console.log("!");
        const lists = await User.findOne({_id: id})

        res.json(lists)
    } catch (error) {
        console.error(error);
    }
}




const registration = async (req, res) => {
    const body = req.body

    console.log(body);

    try {

        const newUser = new User({ 
            name: body.name,
            password: body.password,
            avatar: [
                {
                    '200': 'istockphoto-1298261537-612x612.jpg',
                    '400': 'istockphoto-1298261537-612x612.jpg', 
                    '1000': 'istockphoto-1298261537-612x612.jpg',
                }
            ],
            description: body.description,
            posts: [
                {
                    'postId': Math.floor(Math.random() * 9999999999),
                    'img': {
                        'original': '',
                        'mini': '',
                    },
                    'description': ''
                },
                {
                    'postId': Math.floor(Math.random() * 9999999999),
                    'img': {
                        'original': '',
                        'mini': '',
                    },
                    'description': ''
                }
            ],
        })

        const saveList = await newUser.save()

        res.json(saveList)
    } catch (error) {
        console.error(error);
    }
}


const login = async (req, res) => {
    const body = req.body

    console.log(body);

    try {
        const findUser = await User.findOne({ name: body.name, password: body.password, })

        if (findUser != null) {
            console.log(findUser._id);
            res.json({ 'userId': findUser._id })
        } else {
            console.log('Такого аккаунта нет');
            res.json('Такого аккаунта нет')
        }

    } catch (error) {
        console.error(error);
    }
}


const randomPosts = async (req, res) => {
    const body = req.body
    const posts = []

    console.log(body);

    try {
        const findUser = await User.find({})

        findUser.forEach(element => {
            posts.push({
                "_id": element._id,
                "name": element.name,
                "avatar": element.avatar,
                "post": [ element.posts[Math.floor(Math.random() * element.posts.length)] ]
            }) 
        });

        res.json(posts)

    } catch (error) {
        console.error(error);
    }
}


const getPostId = async (req, res) => {
    const { postId, userId } = req.params
    console.log(postId);
    console.log(userId);
    
    try {
        const lists = await User.findOne({_id: userId})

        console.log(lists);
        const findPost = lists.posts.find((post) => post.PostId == postId)
        
        console.log(lists.posts.find((post) => post.PostId == postId));


        const newObj = {
            "_id": lists._id,
            "name": lists.name,
            "avatar": lists.avatar,
            "post": findPost
        }

        res.json(newObj)
    } catch (error) {
        console.error(error);
    }
}








module.exports = {
    registration,
    login,
    getUserId,
    getAllUsers,
    randomPosts,
    getPostId,
}