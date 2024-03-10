import Post from "./components/Post"

async function fetchData(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result
}


export default async function Home() {
  const res = await fetchData()

  return (
    <div>
      <h1>Main Page </h1>
      {
        res.map((el)=>(
          <Post 
            key={el.id} 
            title={el.title} 
            body={el.body} 
            link={`/post/` + el.id}
          />        
        ))
      }
    </div>
    
  );
}
