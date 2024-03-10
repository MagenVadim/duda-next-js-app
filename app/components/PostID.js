import Link from "next/link";

function PostID({key, title, body, userID}) {
  return (
    <div key={key} className="postID">      
      <Link href={'/'}>Home</Link><br />
      <h2>{title}</h2>
      <p>{body}</p>
      <strong>Author ID: {userID}</strong>
    </div>
  )
}

export default PostID
