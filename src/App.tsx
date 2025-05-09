import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

// Pages
import Scanner from "./pages/scanner.page";

// Layout
import Layout from "./components/Layout";

/* Ionic Core CSS */
import "@ionic/react/css/core.css";

/* Ionic Basic Styles */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Ionic Optional Utilities */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Global App Styles */
import "./App.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Layout>
        <IonRouterOutlet>
          <Route exact path="/scanner">
            <Scanner />
          </Route>

          {/* Default redirect */}
          <Route exact path="/">
            <Redirect to="/scanner" />
          </Route>
        </IonRouterOutlet>
      </Layout>
    </IonReactRouter>
  </IonApp>
);

export default App;
