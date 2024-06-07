import { useSelector } from "react-redux";
import { selectAllCategories } from "../categories/categoriesSlice";

const PostCategory = ({ categoryId }) => {
  const categories = useSelector(selectAllCategories);

  const category = categories.find((category) => category.id === categoryId);

  return <span>{category ? category.name : "Unknown category"}</span>;
};
export default PostCategory;
