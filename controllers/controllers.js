const { v4: uuid_v4 } = require('uuid');

module.exports = {
    generateUuid (){ return uuid_v4() },
    getProducts (){
        return new Promise((res, rej) => {
            let queryString = 'SELECT * FROM Products';
            db.query(queryString, (err, rows, fields) => {
                
                res(rows);
            })
        })
    },
    getItemById (itemId){
        return new Promise(function(res, rej){
            const queryString = `SELECT * FROM Products WHERE Id = ${itemId}`;
            db.query(queryString, (err, rows, fields) => {
                res(rows[0]);
            })
        })
    }
}