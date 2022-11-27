import { lazy, Suspense } from "react";
import { Loader } from "./Components/Components";

// pages
const PageRoutes = lazy(() => import("./Pages/PageRoutes"));

function App() {
  return (
    <div className="font-amazon">
      <Suspense fallback={<Loader />}>
        <PageRoutes />
      </Suspense>
    </div>
  );
}

export default App;
