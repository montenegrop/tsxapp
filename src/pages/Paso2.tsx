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
  IonGrid,
  IonRow,
} from "@ionic/react";
import { star } from "ionicons/icons";
import { BotonRedondo } from "../components/BotonRedondo";
import "./Home.css";

const estilos = {
  botonRedondo: {
    color: "warning",
  },
};

const Paso2Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Más datos descriptivos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <BotonRedondo
              color={estilos.botonRedondo.color}
              texto="color"
            ></BotonRedondo>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <BotonRedondo
              color={estilos.botonRedondo.color}
              texto="modelo"
            ></BotonRedondo>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export { Paso2Page };
