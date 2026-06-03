// Junior Task 1: Basic API Request
const baseUrl = `https://jsonplaceholder.typicode.com`
const usersUrl = `${baseUrl}/users`

type User = {
    id: number
    name: string
    email: string
  } 

async function getUsers() {
    const response = await fetch(usersUrl)
    if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.status} ${response.statusText}`)
    }
    const data: User[] = await response.json()
    if (data.length === 0) {
        console.log("No users found")
        return
    }
    console.log(`Total users: ${data.length}`)
    console.log(`First user: ${data[0].name}`)
}

getUsers().catch(console.error)