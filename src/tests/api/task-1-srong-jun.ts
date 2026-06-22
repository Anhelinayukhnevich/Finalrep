// Strong Junior Level (Better Structure + Safer Logic)

const baseUrl1 = `https://jsonplaceholder.typicode.com`

type User1 = {
    id: number
    name: string
    email: string
  } 

async function getUsers1 (id: number): Promise<User1> {
    const response = await fetch(`${baseUrl1}/users/${id}`)
    if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.status} ${response.statusText}`)
    }
    const data: User1 = await response.json()
    return data
}

getUsers1(3).catch(console.error)
