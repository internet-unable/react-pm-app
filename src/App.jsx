import Sidebar from "./components/Sidebar/Sidebar.jsx";
import NoProject from "./components/NoProject/NoProject.jsx";

function App() {
    return (
        <main className="h-full flex">
            <Sidebar />
            <NoProject />
        </main>
    );
}

export default App;
