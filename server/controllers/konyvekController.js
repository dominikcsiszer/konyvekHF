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

exports.newKonyv = (req, res) => {
    const {title, author, description, category, published, img} = req.body
    db.query('INSERT INTO books (title, author, description, category, published, img) VALUES (?, ?, ?, ?, ?, ?)', [title, author, description, category, published, img], (err, row) => {
        if(err) throw err
        res.status(200).json(row)
    })
}

exports.deleteKonyv = (req, res) => {
    db.query('DELETE FROM books WHERE book_id = ?', [req.params.id],(err, row) => {
        if(err) throw err
        res.status(200).json(row)
    })
}