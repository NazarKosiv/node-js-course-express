const path = require('path');
const fs = require('fs');

const rootDir = require('../utils/path');

module.exports = class User {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    static fetchAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(rootDir, 'db', 'users.json'), {encoding: 'utf-8'}, (error, users) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(users);
                }
            });
        });
    }

    save() {
        const user = JSON.stringify(this);

        return new Promise((resolve, reject) => {
            fs.readFile(path.join(rootDir, 'db', 'users.json'), {encoding: 'UTF-8'}, (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    const users = [...JSON.parse(data)];

                    users.push(user);

                    const usersJson = JSON.stringify(users);

                    fs.writeFile(path.join(rootDir, 'db', 'users.json'), usersJson, (error) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve();
                        }
                    });
                }
            });
        });
    }
};
