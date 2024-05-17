import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Help from "./components/Help.jsx";
import Contact from "./components/Contact.jsx";
import Signup from "./auth/Signup.jsx";
import Login from "./auth/Login.jsx";
import { AuthContaxtProvider } from "./AuthContaxt.jsx";
import Protected from "./Protected.jsx";

function App() {
  return (
    <AuthContaxtProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="help" element={<Help />} />
              <Route
                path="contact"
                element={
                  <Protected>
                    <Contact />
                  </Protected>
                }
              />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContaxtProvider>
  );
}

export default App;
