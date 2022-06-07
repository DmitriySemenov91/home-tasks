import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { posts } from "../../pages/home";

interface postInterface {
  id?: number;
  imageUrl: string;
  title: string;
  text: string;
}

export const FullPost = () => {
  const { id } = useParams();

  const post = posts.find((item: postInterface) => item.id === Number(id));

  const navigate = useNavigate();
  return (
    <div className="full-post">
      <h1>Article №{id}</h1>
      <img src={post?.imageUrl} alt={post?.title} />
      <p>{post?.text}</p>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
};
