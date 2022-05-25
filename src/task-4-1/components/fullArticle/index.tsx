import { Button } from "react-bootstrap";


export const FullPost = () => {
  const dummyText = "Lorem ipsum dolor".repeat(20);
  return (
    <div className="full-post">
      <h1>Article №{5}</h1>
      <img src="https://source.unsplash.com/400x400" alt="Article" />
      <p>{dummyText}</p>
      <a href="/">
        <Button>Back</Button>
      </a>
    </div>
  );
};
