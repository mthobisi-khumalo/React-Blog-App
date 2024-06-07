import PostCategory from "./PostCategory";
import TimePosted from "./TimePosted";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

const PostsExcerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p className="postInfo">
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostCategory categoryId={post.categoryId} />
        <TimePosted timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};
export default PostsExcerpt;
