const users=[
    {   id: 1,
        name: "Mati",
        age: 36,
        gender: "male",
        equipo: "BOQUTIAJUNIORS"
    },
    {
        id:2,
        name: "Migue",
        age: 33,
        gender: "male",
    },
    {
        id:3,
        name: "Miguelito",
        age: 33,
        gender: "male",
    }
]

module.exports = {
    index: (req, res) =>{
        res.json(users);
    }
}