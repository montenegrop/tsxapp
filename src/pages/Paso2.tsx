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
        <IonList>
          <IonItem>
            <BotonRedondo
              color={estilos.botonRedondo.color}
              texto="color"
            ></BotonRedondo>
          </IonItem>
          <IonItem>
            <BotonRedondo
              color={estilos.botonRedondo.color}
              texto="modelo"
            ></BotonRedondo>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export { Paso2Page };
