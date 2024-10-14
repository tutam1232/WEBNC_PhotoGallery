import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import PhotoDetail from "./pages/PhotoDetail";
import PublicContainer from "./components/PublicContainer";
import RouterUrl from "./const/Router";
import LandingPage from "./pages/LandingPage";

// This is the App component, which will contain the routes of the application

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={RouterUrl.LANDINGPAGE}
          element={
            <PublicContainer>
              <LandingPage />
            </PublicContainer>
          }
        />
        <Route
          path={RouterUrl.HOME}
          element={
            <PublicContainer>
              <Home />
            </PublicContainer>
          }
        />
        <Route
          path={RouterUrl.PHOTO}
          element={
            <PublicContainer>
              <PhotoDetail />
            </PublicContainer>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
