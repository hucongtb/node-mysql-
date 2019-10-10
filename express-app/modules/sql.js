//sql.js
// SQL语句封裝
var user = {
    insert:'INSERT INTO user(id, name, age) VALUES(?,?,?)',
    update:'UPDATE user SET name=?, age=? WHERE id=?',
    delete: 'DELETE FROM user WHERE id=?',
    queryById: 'SELECT * FROM user WHERE id=?',
    queryAll: 'SELECT name,id FROM user',
    userAll:  'SELECT name FROM user',
    userTest:  'SELECT id FROM user'
};
module.exports = user;