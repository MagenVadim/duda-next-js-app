import Link from "next/link";

function Post({key, title, body, link}) {
  return (
    <div key={key} className="post">
        <h2>{title}</h2>
        <p>{body}</p>
        <Link href={link}>Details</Link>
  </div> 
  )
}

export default Post
