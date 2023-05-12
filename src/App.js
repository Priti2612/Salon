
import Header from "./components/Header";

import Services from "./components/Services";

import Subservices from "./components/Subservices";
import Team from "./components/Team";
import Welcome from "./components/Welcome";



function App() {
  return (
    <div>
      <Header/>
      <Welcome/>
      <Services/>
      <Subservices/>
      <Team />
    </div>
  );
}

export default App;
