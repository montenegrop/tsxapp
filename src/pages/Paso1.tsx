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
import { BotonRedondo } from "../components/page1/BotonRedondo";

// css:
import "./Paso2.css";
import { BotonVolver } from "../components/BotonVolver";
import { DisplayPlate } from "../components/page1/DisplayPlate";

import "./Paso1.css";
import { PlateButtons } from "../components/page1/PlateButtons";
import { config } from "process";

const estilosProps = {
  botonRedondo: {
    color: "warning",
  },
};

const abecedario = "ABCDEFGHIJKLMOPQRSTUVWXYZ";

interface IplateType {
  number: number;
  configuration: number[];
}

const plateTypeValues = [
  [2, 3, 2],
  [3, 3],
];

const Paso1Page: React.FC = () => {
  const [plateType, setplateType] = useState<IplateType>({
    number: 0,
    configuration: plateTypeValues[0],
  });
  // initial plate:
  const plateLength = plateType.configuration.reduce(
    (partial, curr) => partial + curr,
    0
  );
  const [plate, setPlate] = useState<string[]>(
    Array(plateLength).join(".").split(".")
  );

  function changePlateType() {
    setplateType({
      number: (plateType.number + 1) % plateTypeValues.length,
      configuration:
        plateTypeValues[(plateType.number + 1) % plateTypeValues.length],
    });
  }

  function changePlate(symbol: string, index: number) {
    const old_plate = [...plate];
    console.log(old_plate);
  }

  useEffect(() => {
    console.log("sd");
  }, [plate]);

  return (
    <IonPage>
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
                  onAction={changePlateType}
                ></BotonRedondo>
                <DisplayPlate
                  plateType={plateType.configuration}
                  values={plate}
                ></DisplayPlate>
                <PlateButtons
                  buttons={abecedario}
                  onAction={changePlate}
                ></PlateButtons>
              </IonCardContent>
            </IonCard>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export { Paso1Page };
