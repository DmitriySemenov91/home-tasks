import { Button } from "react-bootstrap";

export const NotFound = () => {
    return (
        <div className="full-post">
            <h1>Page not found</h1>
            <a href="/">
                <Button>Back</Button>
            </a>
        </div>
    );
};
