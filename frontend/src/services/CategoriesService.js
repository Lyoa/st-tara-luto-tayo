export async function listCategories() {
    const response = await fetch('/api/categories')
    return await response.json()
}
