import React from "react";
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

function Profile() {
        return <div>
             <div className="p-d-flex p-jc-center p-ai-center">
      <Avatar image="profile.jpg" size="xlarge" shape="circle" className="p-overlay-badge">
      <Badge value="4" severity="danger" />
      </Avatar>
    </div>
    <div className="p-d-flex p-jc-center">
    <p>Founder of Bayoweb</p>
    </div>
        </div>;

    }

    export default Profile;