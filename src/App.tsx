import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import { Paso2Page } from "./pages/Paso2";
import { ButtonsPage } from "./pages/Buttons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import LoginPage from "./pages/Login";
import { Paso1Page } from "./pages/Paso1";
import { InputExamples } from "./components/TextInputs";
import { Paso3Page } from "./pages/Paso3";

// import "./pages/Paso1.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/pasouno">
          <Paso1Page />
        </Route>
        <Route exact path="/pasodos">
          <Paso2Page />
        </Route>
        <Route exact path="/pasotres">
          <Paso3Page />
        </Route>
        <Route exact path="/test/input">
          <InputExamples />
        </Route>
        <Route exact path="/buttons">
          <ButtonsPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        {/* <Route exact path="/buttons">
          <ButtonsPage />
        </Route> */}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
