import users from '../models/auth.js'

export const fetchUsers = async (req, res) => {
    try {
        const allUsers = await users.find({});
        const allUserDetails = []
        allUsers.forEach(users => {
            allUserDetails.push({ _id: users._id, firstname: users.firstname})
        })
        res.status(200).json(allUserDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
