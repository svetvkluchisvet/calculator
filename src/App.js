import './App.css';
import {Routes, Route} from "react-router-dom";
import {Calculator} from "./components/Calculator/Calculator";
import store from "./components/utils/store";
import {Provider} from "react-redux";
import {HistoryCalc} from "./components/History/HistoryCalc";
import {ROUTES} from "./components/utils/ROUTES";


function App() {
    return (
        <section>
            <Provider store={store}>
                <Routes>
                    <Route index element={<Calculator/>}/>
                    <Route path={ROUTES.HISTORY} element={<HistoryCalc/>}/>
                </Routes>
            </Provider>
        </section>
    );
}

export default App;
