

module.exports = {
    getInventory: ( req, res ) => {
        const db = req.app.get('db');
        db.get_inventory()
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log({err});   
        })
    },
    newProduct: (req, res) => {
        const db = req.app.get('db');
        const { name, image, price } = req.body;
    
        db.create_product([name, image, price])
        .then(() => {
            res.sendStatus(200);
        })
        .catch(err => {
            res.status(500).send('oops.')
            console.log(err)
        })
    }, 
    deleteProduct: (req, res) => {
        const db = req.app.get('db');

        console.log(req.params.id)
        db.delete_product(req.params.id)
        .then(result => {
            res.status(200).send(result)
        }).catch(err => console.log(err))
    },
}