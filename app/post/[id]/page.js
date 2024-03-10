import PostID from "@/app/components/PostID"

export async function generateMetadata({params, searchParams}){
  const post = await fetchData(params.id)
  return{
    title: post.title,
    description: post.body
  }
}

async function fetchData(id){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
  const result = await res.json();
  return result
}


const Post = async ({params: {id}}) => {
  const res = await fetchData(id)

  return (
    <PostID 
       key={res.userId}
       title={res.title}
       body={res.body}
       userID={res.userId}
    />
  )
}

export default Post

