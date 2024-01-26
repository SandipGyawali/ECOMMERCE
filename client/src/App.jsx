import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function Hello() {
  return <h1>Hello</h1>;
}

function App() {
  return (
    <div className="main-container">
      <Suspense fallback={<p>Loading..</p>}>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
