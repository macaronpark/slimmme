import { LandingPage, ProductPage } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route path="/mild">
                        <ProductPage />
                    </Route>
                    <Route path="/venomous">
                        <ProductPage />
                    </Route>
                    <Route path="/unique">
                        <ProductPage />
                    </Route>
                    <Route path="/etc">
                        <ProductPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
