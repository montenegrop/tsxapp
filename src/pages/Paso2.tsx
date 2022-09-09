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
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonItemDivider,
  IonInput,
} from "@ionic/react";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";
import { star } from "ionicons/icons";
import { useState } from "react";
import { BotonRedondo } from "../components/BotonRedondo";
import "./Home.css";

// css:
import "./paso2.css";

const estilosProps = {
  botonRedondo: {
    color: "warning",
  },
};

const estilos = {
  col: {
    "--background": "light-gray",
  },
  label: {
    flex: "0 0 120px",
  },
};

// interfaces:
interface Paso2PageProps {
  titulo: string;
  input: string | undefined;
  onInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}
// componentes complejas importables:
const Paso2Card: React.FC<Paso2PageProps> = ({ titulo, input, onInput }) => {
  return (
    <IonCard className="ion-text-center">
      <IonCardContent className="ion-text-center">
        <BotonRedondo
          color={estilosProps.botonRedondo.color}
          texto={titulo}
        ></BotonRedondo>
        <IonList>
          <IonItem lines="full">
            <IonLabel style={estilos.label} position="fixed" className="mr-0">
              Ingreso manual:
            </IonLabel>
            <IonInput
              value={input}
              onIonChange={(e) => onInput(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel style={estilos.label} position="fixed">
              Seleccionar:
            </IonLabel>
            <IonInput
              value={input}
              onIonChange={(e) => onInput(e.detail.value!)}
            ></IonInput>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

const Paso2Page: React.FC = () => {
  const [number, setNumber] = useState<number>();
  const [text, setText] = useState<string>();

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
            <IonCol>
              <Paso2Card
                titulo="modelo"
                input={text}
                onInput={setText}
              ></Paso2Card>
              <Paso2Card
                titulo="color"
                input={text}
                onInput={setText}
              ></Paso2Card>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export { Paso2Page };
