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
import { useLayoutEffect, useRef, useState } from "react";
import { PlateType } from "../components/page1/PlateType";

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
const numeros = "0123456789x";

interface IplateType {
  number: number;
  configuration: number[];
}

const plateTypeValues = [
  [2, 3, 2],
  [3, 3],
];

const plateTypeDisplayIndexesByType = [
  [0, 1, 5, 6],
  [0, 1, 2],
];

const Paso1Page: React.FC = () => {
  // usestates:
  const [plateType, setplateType] = useState<IplateType>({
    number: 0,
    configuration: plateTypeValues[0],
  });
  const plateLength = plateType.configuration.reduce(
    (partial, curr) => partial + curr,
    0
  );
  const [plate, setPlate] = useState<string[]>(
    Array(plateLength).join(".").split(".")
  );
  const [plateIndexToChange, setPlateIndexToChange] = useState(0);

  const [hide, setHide] = useState(true);

  console.log("in" + plateIndexToChange);

  // useeffects:
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const plateLength = plateType.configuration.reduce(
      (partial, curr) => partial + curr,
      0
    );
    setPlate(Array(plateLength).join(".").split("."));
    setPlateIndexToChange(0);
    setHide(true);
  }, [plateType]);

  // functions:
  function changePlateType() {
    setplateType({
      number: (plateType.number + 1) % plateTypeValues.length,
      configuration:
        plateTypeValues[(plateType.number + 1) % plateTypeValues.length],
    });
  }

  function onDisplayClick(index: number) {
    setPlateIndexToChange(index);
    if (plateTypeDisplayIndexesByType[plateType.number].includes(index)) {
      setHide(true);
    } else {
      setHide(false);
    }
  }

  function changePlate(symbol: string) {
    const old_plate = [...plate];
    old_plate[plateIndexToChange] = symbol;
    setPlate(old_plate);

    if (
      plateTypeDisplayIndexesByType[plateType.number].includes(
        (plateIndexToChange + 1) % plate.length
      )
    ) {
      setHide(true);
    } else {
      setHide(false);
    }

    setPlateIndexToChange((plateIndexToChange + 1) % plate.length);
  }

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
          <IonRow className="ion-justify-content-center">
            <IonCard className="ion-text-center">
              <IonCardContent className="ion-text-center">
                <PlateType
                  color={estilosProps.botonRedondo.color}
                  texto="patente"
                  onAction={changePlateType}
                ></PlateType>
                <DisplayPlate
                  plateType={plateType.configuration}
                  values={plate}
                  onClick={onDisplayClick}
                ></DisplayPlate>
                <PlateButtons
                  hidden={!hide}
                  buttons={abecedario}
                  onAction={changePlate}
                ></PlateButtons>
                <PlateButtons
                  hidden={hide}
                  buttons={numeros}
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
