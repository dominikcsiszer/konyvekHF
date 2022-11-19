const db = require('../database')

exports.konyvek = (req, res) =>{
    db.query('SELECT * FROM books', (err, row) => {
        if(err) throw err
        res.status(200).json(row)
    })
}

exports.konyv = (req, res) =>{
    db.query('SELECT * FROM books WHERE book_id = ?', [req.params.id],(err, row) => {
        if(err) throw err
        res.status(200).json(row)
    })
}