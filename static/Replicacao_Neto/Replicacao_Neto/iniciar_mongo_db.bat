"c:\Program Files\MongoDB 2.6 Standard\bin\mongod.exe" --dbpath c:\mongodb --port 27017

db.createUser(
  {
    user: "qualiom",
    pwd: "qualiom",
    roles:
    [
      {
        role: "userAdminAnyDatabase",
        db: "admin"
      }
    ]
  }
)