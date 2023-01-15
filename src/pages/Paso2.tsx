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

const Paso2Page: React.FC = () => {
  return (
    <IonPage>
      <div></div>
      <IonHeader>
        <IonToolbar>
          <BotonVolver texto="volver" />
          <IonTitle class="ion-text-center">Más datos descriptivos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCard className="ion-text-center">
              <IonCardContent>
                <ChooseOrWrite
                  manualLabel="escribi"
                  selectLabel="elegi"
                  options={[{ name: "Rojo", value: "rojo" }]}
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
