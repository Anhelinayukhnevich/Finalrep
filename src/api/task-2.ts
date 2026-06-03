//Junior task 2
const baseUrl = `https://jsonplaceholder.typicode.com`
const postsUrl = `${baseUrl}/posts`

async function createPost() {
    const response = await fetch(postsUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        title: "My first post",
        body: "Learning API testing",
        userId: 1
      }),
  })

  try {
    const data = await response.json()
    console.log(`Status: ${response.status}`)
    console.log(`Title: ${data.title}`)
    console.log(`Id: ${data.id}`)
  } catch (error) {
    console.error("Error:", error)
  }
  finally {
    console.log("Post created successfully")
  }
}


createPost()
export {}