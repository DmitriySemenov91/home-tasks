import { Button } from "react-bootstrap";

interface idArticle {
  id: string;
}

export const FullPost = ({ id }: idArticle) => {
  const dummyText = "Lorem ipsum dolor".repeat(20);
  return (
    <div className="full-post">
      <h1>Article №{id}</h1>
      <img src="https://source.unsplash.com/400x400" alt="Article" />
      <p>{dummyText}</p>
      <a href="/">
        <Button>Back</Button>
      </a>
    </div>
  );
};
