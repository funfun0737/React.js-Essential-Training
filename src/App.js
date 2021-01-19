import {Routes, Route} from "react-router";
import {
    Monday,
    Tuesday,
    Woops404,
    MondayWork
} from './pages';


function App() {
    return (
        <div>
            <Routes>
                <Route path ="/" element = {<Monday />} >
                    <Route path = "/work" element = {<MondayWork/>} />
                </Route>
                <Route path ="/2" element = {<Tuesday />} />
                <Route path ="*" element = {<Woops404 />} />

            </Routes>
        </div>
    );
}

export default App;