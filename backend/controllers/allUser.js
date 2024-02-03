
const { user } = require("../models/User");

async function getAllUsers(req, res) {
        try {
          const users = await user.findAll();
          res.json(users);
        //   console.log(res.json(users));
        } catch (error) {
          console.error('Error fetching users:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }


module.exports = getAllUsers;