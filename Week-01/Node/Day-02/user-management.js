let users = [];
let idCounter = 1;

function simulateApi(data, delay = 500, shouldFail = false) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (shouldFail) {
                rej("Simulated API error");
            } else {
                res(data);
            }
        }, delay);
    });
}

async function createUser({ name, email }) {
    if (!name || !email) throw new Error("Missing required field");
    const newUser = { id: idCounter++, name, email };
    users.push(newUser);
    return await simulateApi(newUser);
}

async function getAllUsers() {
    return await simulateApi(users);
}

async function updateUser(id, updates) {
    const user = users.find(u => u.id === id);

    if (!user) throw new Error("user not found");

    Object.assign(user, updates);
    return await simulateApi(user);
}

async function deleteUser(id) {
    const idx = users.find(u => u.id === id);
    if (idx === -1) throw new Error("user not found");

    const deleted = users.splice(idx, 1)[0];
    return await simulateApi(deleted);
}

async function runUserApp() {
    try {
        const user1 = await createUser({ name: "Arzoo", email: "ajarzoo@gmail.com" });
        const user2 = await createUser({ name: "Aastha", email: "aastha25@gmail.com" });

        console.log("Created users: ", user1, user2);

        const allUsers = await getAllUsers();
        console.log("All Users: ", allUsers);

        const updatedUser = await updateUser(user1.id, { email: "itsarzoo@gmail.com" });
        console.log("Updated User: ", updatedUser);

        console.log("All Users: ", allUsers);

        const deletedUser = await deleteUser(user1.id);
        console.log("Deleted User: ", deletedUser);

        const finalUsers = await getAllUsers();
        console.log("Final Users List: ", finalUsers);
    } catch (err) {
        console.error("Error: ", err.message || err);
    }
}

runUserApp();