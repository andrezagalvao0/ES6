const user = {
    name: 'Andreza',
    lastName: 'Galvão Almeida'
};

function getUserWithFullName(user){
    return{
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);