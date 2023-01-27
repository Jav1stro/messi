const users=[
    {   id: 1,
        fullName: "Javi",
        email: "javi@javi",
        password: "boca",
        age: 23,
    },
    {
        id:2,
        name: "Rocko",
        email: "rocko@rocko",
        password: 'river',
        age:27,
    }
]

module.exports = {
    index: (req, res) =>{
        res.json(users);
    }
}