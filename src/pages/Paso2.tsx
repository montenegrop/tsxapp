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
import { BotonRedondo } from "../components/BotonRedondo";
import "./Home.css";

const Paso2Page: React.FC = () => {
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
            <BotonRedondo color="warning" texto="color"></BotonRedondo>
          </IonItem>
          <IonItem>
            <BotonRedondo color="warning" texto="modelo"></BotonRedondo>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export { Paso2Page };
