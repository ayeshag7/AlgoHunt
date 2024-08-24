import { ActivationPage } from "./pages";
import { LoginPage } from "./pages";
import {SignUpPage} from "./pages";
import { SubscriptionPage } from "./pages";
import {PurchasePage} from "./pages";
import { CCInfoPage } from "./pages";
import { EmailSetUp } from "./pages";
import { EmailSuccess } from "./pages/EmailSuccess";

import {Home} from "./pages";

import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen">
      {/* <LoginPage/> */}
      {/* <SignUpPage/> */}
      {/* <ActivationPage/> */}
      {/* <SubscriptionPage/> */}
      {/* <PurchasePage/> */}
      {/* <CCInfoPage/> */}
      {/* <EmailSetUp/> */}
      {/* <EmailSuccess/> */}

      <AllRoutes/>
      
    </div>
  );
}

export default App;
