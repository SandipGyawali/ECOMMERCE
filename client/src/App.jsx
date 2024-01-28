import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Layout = lazy(() => import("./pages/Layout"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const SideBar = lazy(() => import("./components/SideBar/SideBar"));

function Hello() {
  return (
    <div>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
    </div>
  );
}

function App() {
  return (
    <div className="main-container">
      <Suspense fallback={<p>Loading..</p>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Hello />} />
          </Route>

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
