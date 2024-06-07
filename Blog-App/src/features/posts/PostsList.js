import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostCategory from "./PostCategory";
import TimePosted from "./TimePosted";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>

      <p className="postInfo">
        <TimePosted timestamp={post.date} />
        <span class="gap">In</span>
        <PostCategory categoryId={post.categoryId} />
      </p>

      <p>{post.content.substring(0, 100)}</p>

      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
export default PostsList;
