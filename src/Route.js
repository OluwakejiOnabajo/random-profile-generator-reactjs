import { BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "./Profile";


function MyRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Profile />} />
    </Routes>
  </BrowserRouter>
  );
}

export default MyRoutes;
