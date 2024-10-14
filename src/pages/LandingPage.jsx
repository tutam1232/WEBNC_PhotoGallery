import RouterUrl from "../const/Router";
import { Link } from "react-router-dom";

// This is the landing page of the application, it will show a welcome message and a link to the photo list view

function LandingPage() {
    return (
        <div style={{display: "flex",  width: "100%", alignItems: "center", flexDirection: "column"}}>
            <h2>Landing Page</h2>
            <p>Our photos list view is at {RouterUrl.HOME}</p>
            <Link to={RouterUrl.HOME}>Click here to navigate</Link>
        </div>
    );
}

export default LandingPage;