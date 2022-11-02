import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                               //icons
import 'primeflex/primeflex.css';



import Profile from "./Components/Profile";
import { useEffect } from "react";
import React, {useState} from "react";
import Links from "./Components/Link";
 

function App() {
  const [profile, setProfile] = useState({
    "name": "Agboola Abayomi",
    "bio": "",
    "avatar": "",
    "links": []

  });

  useEffect(() => {
   fetch("/data/hngfirsttask.json")
    .then((response) => response.json())
    .then((data) => setProfile(data));
  }, [])
  return (
    <div className="p-m-4">
   <Profile  name={profile.name} bio={profile.bio} avatar={profile.avatar}/>
   <Links/>
    </div>
  );
}

export default App;
