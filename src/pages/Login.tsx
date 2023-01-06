import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { isPlatform } from "@ionic/react";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";

const LoginPage: React.FC = () => {
  if (!isPlatform("capacitor")) {
    GoogleAuth.initialize();
  }

  const signIn = async () => {
    const user = await GoogleAuth.signIn();
    console.log("user", user);
  };

  // el signOut es solo frontend:
  const signOut = async () => {
    const out = await GoogleAuth.signOut();
    console.log("user", out);
  };
  const refresh = async () => {
    const refresh = await GoogleAuth.refresh();
    console.log("user", refresh);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => signIn()}>log in</IonButton>
        <IonButton onClick={() => signOut()}>log out</IonButton>
        <IonButton onClick={() => refresh()}>refresh token</IonButton>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
