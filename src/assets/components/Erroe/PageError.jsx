import { Link, useRouteError } from "react-router-dom";


const PageError = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h1>oops</h1>
            <p> {error.statusText || error.message}</p>
            {
error.status === 404 && <div>
    <Link to="/"><button>Go back to home</button></Link>
</div>
            }
        </div>
    );
};

export default PageError;