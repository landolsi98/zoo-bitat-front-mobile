import React from "react";
import { IonApp, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { home, menu ,logIn , personAdd, person} from 'ionicons/icons';

import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

const Home: React.FC = () => {
  return (
    <IonApp>
        <IonRouterOutlet>
          {/* Existing routes */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </IonRouterOutlet>
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>
            Navigation
          </IonListHeader>
          <IonMenuToggle autoHide={false}>
              <IonItem button routerLink="/Home">
                <IonIcon slot="start" icon={home} />
                <IonLabel>Home</IonLabel>
              </IonItem>
              <IonItem button routerLink="/login">
              <IonIcon slot="start" icon={logIn} />
                <IonLabel>Login</IonLabel>
              </IonItem>
              <IonItem button routerLink="/signup">
              <IonIcon slot="start" icon={personAdd} />
                <IonLabel>Sign Up</IonLabel>
              </IonItem>
            </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>

    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuToggle>
              <IonButton>
                <IonIcon slot="icon-only" icon={menu} />
              </IonButton>
            </IonMenuToggle>
          </IonButtons>
          <IonTitle>Header</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Principal Content</h1>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  </IonApp>
);
};

export default Home;
