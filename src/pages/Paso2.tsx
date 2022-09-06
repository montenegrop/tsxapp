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
  IonCol,
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
          <IonRow>
            <IonCol className="ion-text-center">
              <BotonRedondo
                color={estilos.botonRedondo.color}
                texto="color"
              ></BotonRedondo>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <BotonRedondo
                color={estilos.botonRedondo.color}
                texto="modelo"
              ></BotonRedondo>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList>
          <IonItem className="ion-justify-content-center">
            <BotonRedondo
              color={estilos.botonRedondo.color}
              texto="modelo"
            ></BotonRedondo>
          </IonItem>
        </IonList>
        <IonRow className="ion-align-items-start">
          <IonCol>start ion-col</IonCol>
          <IonCol>start ion-col</IonCol>
          <IonCol className="ion-align-self-end">start ion-col end</IonCol>
          <IonCol>
            ion-col
            <br />#
            <br />#
          </IonCol>
        </IonRow>

        <IonRow className="ion-align-items-center">
          <IonCol>center ion-col</IonCol>
          <IonCol>center ion-col</IonCol>
          <IonCol>center ion-col</IonCol>
          <IonCol>
            ion-col
            <br />#
            <br />#
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export { Paso2Page };
