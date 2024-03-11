import PostID from "@/app/components/PostID"

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
 
  return data.map((post) => ({
    id: post.id.toString(),
  }))
}


async function getPost(id){
  const result = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
  const data = result.json();
  return data;
}

export async function generateMetadata({params}){
  const post = await getPost(params.id)
  return{
    title: post.title,
    description: post.body
  }
}


const Post = async ({params:{id}}) => {
  const post = await getPost(id);

  return (
    <PostID 
       key={post.userId}
       title={post.title}
       body={post.body}
       userID={post.userId}
    />
  )
}

export default Post

