import { Link, Route, useRouteMatch } from "react-router-dom";
import WizardPage from "./characterClassComponents/WizardPage";
import BarbarianPage from "./characterClassComponents/BarbarianPage";

function CharacterClassMain(){
    const {url, path} = useRouteMatch();

    return (
        <div className="CharacterClassMain">
            <h2>Character class hub!</h2>
            <ul>
                <li>
                    <Link to={`${url}/wizards`}>About Wizards</Link>
                </li>
                <li>
                    <Link to={`${url}/barbarians`}>About Barbarians</Link>
                </li>
            </ul>

            <Route path={`${path}/wizards`}>
                <WizardPage />
            </Route>
            <Route path={`${path}/barbarians`}>
                <BarbarianPage />
            </Route>
        </div>
    )
}

export default CharacterClassMain;