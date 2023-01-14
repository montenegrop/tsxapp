import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonButton,
  IonInput,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { BotonRedondo } from "../components/BotonRedondo";

// css:
import "./Paso2.css";
import { BotonVolver } from "../components/BotonVolver";
import { DisplayPlate } from "../components/page1/DisplayPlate";

import "./Paso1.css";
import { PlateButtons } from "../components/page1/PlateButtons";

const estilosProps = {
  botonRedondo: {
    color: "warning",
  },
};

const abecedario = "ABCDEFGHIJKLMOPQRSTUVWXYZ";

const Paso1Page: React.FC = () => {
  const [text, setText] = useState<string>();
  const [plateType, setplateType] = useState<number[]>([2, 3, 2]);
  // initial plate:
  const plateLength = plateType.reduce((partial, curr) => partial + curr, 0);
  const [plate, setPlate] = useState<string[]>(
    Array(plateLength).join(".").split(".")
  );
  // Array(plateLength).join(".").split(".")

  return (
    <IonPage>
      <div></div>
      <IonHeader>
        <IonToolbar>
          <BotonVolver texto="volver" />
          <IonTitle class="ion-text-center">Ingrese la patente</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCard className="ion-text-center">
              <IonCardContent className="ion-text-center">
                <BotonRedondo
                  color={estilosProps.botonRedondo.color}
                  texto="patente"
                ></BotonRedondo>
                <DisplayPlate
                  plateType={plateType}
                  values={plate}
                ></DisplayPlate>
                <PlateButtons buttons={abecedario}></PlateButtons>
              </IonCardContent>
            </IonCard>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export { Paso1Page };
