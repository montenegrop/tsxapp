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
import { DisplayGrid } from "../components/DisplayPatente";

import "./Paso1.css";

const estilosProps = {
  botonRedondo: {
    color: "warning",
  },
};

// interfaces:
interface Paso1PageProps {
  titulo: string;
  input: string | undefined;
  onInput: React.Dispatch<React.SetStateAction<string | undefined>>;
  plate: string[];
  plateType: number[];
}

const abecedario = "ABCDEFGHIJKLMOPQRSTUVWXYZ";

const ButtonsGrid: React.FC = () => {
  return (
    <IonGrid>
      <IonRow>
        {abecedario.split("").map((letter) => (
          <IonCol key={letter}>
            <IonButton size="large">{letter}</IonButton>
          </IonCol>
        ))}
        <IonCol>
          <IonButton size="large">last</IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

// componentes complejas importables:
const Paso1Card: React.FC<Paso1PageProps> = ({
  titulo,
  input,
  onInput,
  plate,
  plateType,
}) => {
  return (
    <IonCard className="ion-text-center">
      <IonCardContent className="ion-text-center">
        <BotonRedondo
          color={estilosProps.botonRedondo.color}
          texto={titulo}
        ></BotonRedondo>
        <DisplayGrid plateType={plateType} values={plate}></DisplayGrid>
        <ButtonsGrid></ButtonsGrid>
      </IonCardContent>
    </IonCard>
  );
};

const Paso1Page: React.FC = () => {
  const [text, setText] = useState<string>();
  const [plateType, setplateType] = useState<number[]>([2, 3, 2]);
  // initial plate:
  const plateLength = plateType.reduce((partial, curr) => partial + curr, 0);
  const [plate, setPlate] = useState<string[]>([
    "a",
    "a",
    "c",
    "d",
    "a",
    "a",
    "a",
  ]);
  // Array(plateLength).join(".").split(".")

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
          <IonRow>
            <IonCol>
              <Paso1Card
                titulo="patente"
                input={text}
                onInput={setText}
                plate={plate}
                plateType={plateType}
              ></Paso1Card>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export { Paso1Page };
