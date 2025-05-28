const ListAlibom = require("../models/listModelAlibom")

const getAllAliboms = async (req, res) => {
    try {
        console.log("!");
        const lists = await ListAlibom.find()

        res.json(lists)
    } catch (error) {
        console.error(error);
    }
}

const getAlibomId = async (req, res) => {
    const { id } = req.params
    try {
        console.log("!");
        const lists = await ListAlibom.findOne({_id: id})

        res.json(lists)
    } catch (error) {
        console.error(error);
    }
}




const setNewAlibom = async (req, res) => {
    const body = req.body

    console.log(body);
    

    try {
        const lists = new ListAlibom({ 
            alibomName: body.alibomName,  
            alibomExecutor: body.alibomExecutor, 
            alibomDateRelease: body.alibomDateRelease,
            alibomCover: {
                '200': '',
                '1000': ''
            },
            trekList: [
                {trekId: Math.floor(Math.random() * 99999999), trekName: '12345'},
                {trekId: Math.floor(Math.random() * 99999999), trekName: '12097'},
                {trekId: Math.floor(Math.random() * 99999999), trekName: '79563'},
            ]

        })

        const saveList = await lists.save()

        res.json(saveList)
    } catch (error) {
        console.error(error);
    }
}





module.exports = {
    getAllAliboms,
    getAlibomId,
    setNewAlibom,
}