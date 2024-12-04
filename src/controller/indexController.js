const indexController = app =>{
    app.get('/', (req, res) =>{
        res.json({"msg": "ok"})
    });

    app.get('/:tag', (req, res) =>{
        res.json({"msg": "ok"})
    });
    
    app.post('/', (req, res) =>{
        res.json({"msg": "ok"})
    });

    app.patch('/', (req, res) =>{
        res.json({"msg": "ok"})
    });

    app.delete('/:tag', (req, res) =>{
        res.json({"msg": "ok"})
    });
}


export default indexController;