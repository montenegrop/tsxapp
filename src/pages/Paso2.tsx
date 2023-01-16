import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCard,
  IonCardContent,
} from "@ionic/react";

// css:
import "./Paso2.css";
import { BotonVolver } from "../components/BotonVolver";
import { ChooseOrWrite } from "../components/page2/ChooseOrWrite";

// modelo:
const titleModel = "Modelo";
const muanualLabelModel = "Escribir";
const selectLabelModel = "Elegir";
const optionsModel = [
  { name: "Fiat", value: "fiat" },
  { name: "Renault", value: "renault" },
];

// color:
const titleColor = "Color";
const muanualLabelColor = "Escribir";
const selectLabelColor = "Elegir";
const optionsColor = [
  { name: "Rojo", value: "rojo" },
  { name: "Azúl", value: "azúl" },
];

const Paso2Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <BotonVolver texto="volver" />
          <IonTitle class="ion-text-center">
            Datos descriptivos principales
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCard className="ion-text-center">
              <IonCardContent>
                <IonTitle>{titleModel}</IonTitle>
                <ChooseOrWrite
                  manualLabel={muanualLabelModel}
                  selectLabel={selectLabelModel}
                  options={optionsModel}
                  onManualChange={null}
                  onOpntionSelect={null}
                ></ChooseOrWrite>
              </IonCardContent>
            </IonCard>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCard className="ion-text-center">
              <IonCardContent>
                <IonTitle>{titleColor}</IonTitle>
                <ChooseOrWrite
                  manualLabel={muanualLabelColor}
                  selectLabel={selectLabelColor}
                  options={optionsColor}
                  onManualChange={null}
                  onOpntionSelect={null}
                ></ChooseOrWrite>
              </IonCardContent>
            </IonCard>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export { Paso2Page };
