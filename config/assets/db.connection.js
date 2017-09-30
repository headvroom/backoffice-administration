module.exports = { 
database: process.env.DB_NAME || "vroom_admin", 
host: process.env.DB_HOST || "35.196.59.103",  
 port: process.env.DB_PORT || 3306, //5432, 
 username: process.env.DB_USERNAME || "vroom_admin",  
password: process.env.DB_PASSWORD || "BenzoS550!",  
dialect: process.env.DB_DIALECT || "mysql", //mysql, postgres, sqlite3,... 
storage: "./db.development.sqlite", 
enableSequelizeLog: (process.env.DB_LOG === 'true') ? true:false, 
ssl: process.env.DB_SSL || false,   
sync: (process.env.DB_SYNC === 'true') ? true:false //Synchronizing any model changes with database 
};