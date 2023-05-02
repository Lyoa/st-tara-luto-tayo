export const createUser = async (users) => {
    try {
        const response = await fetch('/api/v1/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ users }),
        })
        return response.json()
    } catch (error) {
        console.error(error.message)
    }
}

export async function getUserList() {
    try {
        const response = await fetch('/api/v1/users')
        return response.json()
    } catch (error) {
        console.log('Error: ', error)
    }
}

export async function updateUser(users) {
    const response = await fetch('/api/v1/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ users: users }),
    })
    return await response.json()
}

export async function deleteUser(id) {
    try {
        const confirmed = window.confirm('You are about to delete this data')
        if (confirmed) {
            const deleteUser = await fetch(`/api/v1/users/${id}`, {
                method: 'DELETE',
            })
            return true
        }
    } catch (error) {
        console.log('Error: ', error)
    }
}
