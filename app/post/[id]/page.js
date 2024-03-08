import Link from "next/link";

async function fetchData(id){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
  const result = await res.json();
  return result
}


const Post = async ({params: {id}}) => {

  const res = await fetchData(id)

  return (
    <div>
      <Link href={'/'}>Home</Link><br />
      <h2>{res.title}</h2>
      <p>{res.body}</p>
      <strong>Author ID: {res.userId}</strong>
    </div>
  )
}

export default Post

