const express = require('express')
const router = express.Router()

const listofusers = [

    {
        'id' :1,
        'name' : 'sriram'
    },
    {
        'id' : 2,
        'name' : 'sharoneh'
    },
    {
        'id' : 3,
        'name' : 'anisha'
    }
]



// router.get('/', (request , response) => {
    
//     response.send("this is the user page")
            
// })
router.get('/', (request,response) => {
    response.send("This is the User Page")
})

router.get('/new', (request,response) => {
    response.render("users/new")
})

router.post('/', (request, response) => {
    listofusers.push({name:request.body.name})
    response.redirect(`/users/${listofusers.length}`)
})

router.get('/:id', (request , response) => {
    // const pageid = Number(request.params.id);
    // const UserId = listofusers.find((user)=> user.id === pageid);

    // if(!UserId){
    //     response.send("page not found")
    // }

    // else
    // {
    //     response.json(UserId.name)
    // }
    response.send(`User name: ${request.user.name} `)

})

router.param('id', (request,response,next,id) => {
    console.log(id)
    request.user = listofusers[id-1];
    console.log(request.user);
    console.log(request.user.name);
    next()
})

module.exports = router
