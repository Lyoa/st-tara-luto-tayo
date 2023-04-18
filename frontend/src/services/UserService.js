export async function getAllUsers() {
    const response = await fetch('/api/v1/users')
    return await response.json()
}

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

export async function editUser(data) {
    const response = await fetch(`/api/v1/users`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: data }),
    })
    return await response.json()
}

export async function deleteUser(id) {}

export async function deleteUser(id) {
    try {
        const confirmed = window.confirm(
            'Are you sure you want to delete this user?'
        )
        if (confirmed) {
            const deleteUser = await fetch(
                `/api/v1/users/${id}`,
                { method: 'DELETE' }
            )
            return true
        }
    } catch (error) {
        console.error(error.message)
        throw error
    }
}