// add getUserList
// export const getUserList = async () => {
//     try {
//         const response = await fetch('/api/v1/users')
//         if (response.status === 200) {
//             console.log('Fetched records successfully', await response.json())
//         }
//     } catch (error) {
//         console.log('Failed to fetch records', error)
//     }
// }

export async function getUserList() {
    try {
        const response = await fetch('/api/v1/users')
        return response.json()
    } catch (error) {
        console.log('Error: ', error)
    }
}

// add createUser
// const createUser = () => {

// }
// add updateUser
// const updateUser = () => {

// }
// add deleteUser
// const deleteUser = () => {

// }
