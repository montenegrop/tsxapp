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
import { useState } from "react";
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
}

const abecedario = "ABCDEFGHIJKLMOPQRSTUVWXYZ";

const ButtonsGrid: React.FC = () => {
  return (
    <IonGrid>
      <IonRow>
        {abecedario.split("").map((letter) => (
          <IonCol>
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
const Paso1Card: React.FC<Paso1PageProps> = ({ titulo, input, onInput }) => {
  return (
    <IonCard className="ion-text-center">
      <IonCardContent className="ion-text-center">
        <BotonRedondo
          color={estilosProps.botonRedondo.color}
          texto={titulo}
        ></BotonRedondo>
        <DisplayGrid></DisplayGrid>
        <ButtonsGrid></ButtonsGrid>
      </IonCardContent>
    </IonCard>
  );
};

const Paso1Page: React.FC = () => {
  const [text, setText] = useState<string>();

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
              ></Paso1Card>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export { Paso1Page };
