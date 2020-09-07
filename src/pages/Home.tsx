import React from 'react';
import {  Route,Link } from 'react-router-dom';
import { IonApp, IonRouterOutlet,IonButton,IonIcon } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { people, logoAndroid} from 'ionicons/icons';
import app from "./App"




/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */





const App: React.FC = () => (

  // stylng of landing page
 
  <IonApp style={{backgroundColor:"lightgreen"}} >
      <div style={{textAlign:"center",margin:"auto"}}>

     {/* icon for landing page */}
    <IonIcon style={{transform:"scale(5)"}} icon={logoAndroid} size="large"  ></IonIcon>
    <IonReactRouter>
      <IonRouterOutlet>
        
      
        

      {/* route setup */}
       
        <Link to="/ashu" style={{color:"white",textDecoration:"none",textAlign:"center"}}> <IonButton expand="full" >Play</IonButton></Link>
       
       
        <Route  path="/ashu" component={app} exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
    
</div>

  
  </IonApp>
);

export default App;
