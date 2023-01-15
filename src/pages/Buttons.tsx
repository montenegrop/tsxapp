import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList,
  IonItem,
  IonIcon,
} from "@ionic/react";
import { star } from "ionicons/icons";

const ButtonsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonButton>ionicdefault</IonButton>
          </IonItem>
          <IonItem>
            <IonButton shape="round">ionicRound</IonButton>
          </IonItem>
          <IonItem>
            <IonButton expand="block">Block Button</IonButton>
            <IonButton expand="full">full Button</IonButton>
          </IonItem>
          <IonItem>
            <IonButton expand="full" fill="outline">
              Outline + Full
            </IonButton>
            <IonButton expand="block" fill="outline">
              Outline + Block
            </IonButton>
            <IonButton shape="round" fill="outline">
              Outline + Round
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton>
              <IonIcon slot="start" icon={star}></IonIcon>
              Left Icon
            </IonButton>
            <IonButton>
              Right Icon
              <IonIcon slot="end" icon={star}></IonIcon>
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton>
              <IonIcon slot="icon-only" icon={star}></IonIcon>
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton size="large">Large</IonButton>
            <IonButton>Default</IonButton>
            <IonButton size="small">Small</IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export { ButtonsPage };
