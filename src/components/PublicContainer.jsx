import { ErrorBoundary } from "react-error-boundary";
import Loading from "./Loading";
import Error from "./Error";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import RouterUrl from "../const/Router";

// This is the public container component, it will wrap the children components and show a loading spinner and error using ErrorBoundary and Suspense
// to catch error or promise
// Also display a navigation bar with links to Landing page and Home page

const PublicContainer = ({ children }) => {
  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <h1 style={{textAlign: "center"}}>Photos gallery exercise</h1>
        <div style={{display: "flex", width: "100%", justifyContent: "center", margin: "2vw"}}>
            <div style={{display: "flex", width: "20%", justifyContent: "space-around"}}>
                <Link to={RouterUrl.LANDINGPAGE}>Landing page</Link>
                <Link to={RouterUrl.HOME}>Photo list view</Link>
            </div>

        </div>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default PublicContainer;
