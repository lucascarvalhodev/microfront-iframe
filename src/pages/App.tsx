import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-screen">
      <div className="h-[50px] px-10 flex items-center">
        <div className="font-bold">Microfrontend</div>
      </div>
      <div className="bg-gray-800 text-sm flex items-center gap-6 px-10 h-[24px] text-white">
        <Link to="/">Home</Link>
        <Link to="/app1">App 1</Link>
        <Link to="/app2">App 2</Link>
      </div>
      <div className="w-full h-[calc(100vh-75px)] overflow-x-hidden overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
