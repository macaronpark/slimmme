import { LandingPage, ProductPage, DetailPage } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/mild" component={ProductPage} />
                    <Route path="/venomous" component={ProductPage} />
                    <Route path="/unique" component={ProductPage} />
                    <Route path="/etc" component={ProductPage} />
                    <Route path="/detail" component={DetailPage} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
