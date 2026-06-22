//Junior task 2
const baseUrl = `https://jsonplaceholder.typicode.com`
const postsUrl = `${baseUrl}/posts`
type PostData = {
  title: string;
  body: string;
  userId: number;
};
//  removed hardcoded values from request body

type PostResponse = PostData & {
  id: number;
};

async function createPost(data: PostData): Promise<PostResponse> {
    try {
    const response = await fetch(postsUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (response.status !== 201) {
    throw new Error(`Post was not created. Status: ${response.status}`);
  }
  //added response status validation (201 expected for created resource)

const result = (await response.json()) as PostResponse;

  //console.log("Status:", response.status); 
  //console.log(result);
  //Old console.lo func -> removed

  return result;
} catch (error) {
    console.error("Error:", error);
    throw error;
    }
}
async function run() {
  const result = await createPost({
    title: "My first post",
    body: "Learning API testing",
    userId: 1,
  });
  // removed hardcoded values from request body, so function now returns API response instead of only logging it

  console.log("RESULT:", result);
}

run();

export {};

//Also added try,catch,throw as more stable structure for testing. (  added error handling )