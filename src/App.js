import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                               //icons

import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import 'primeflex/primeflex.css';
 

function App() {
  return (
    <div className="p-m-4">
    <div className="p-d-flex p-jc-center p-ai-center">
      <Avatar image="profile.jpg" size="xlarge" shape="circle" className="p-overlay-badge">
      <Badge value="4" severity="danger" />
      </Avatar>
    </div>
    <div className="p-d-flex p-jc-center">
    <p>Founder of Bayoweb</p>
    </div>
    </div>
  );
}

export default App;
