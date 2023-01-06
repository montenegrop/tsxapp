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
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";
import { star } from "ionicons/icons";
import { useState } from "react";
import { BotonRedondo } from "../components/BotonRedondo";

// css:
import "./Paso2.css";
import { BotonVolver } from "../components/BotonVolver";

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

const options = {
  cssClass: "my-custom-interface",
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
            <IonSelect
              interface="alert"
              cancelText="cancelar"
              okText="oktexto"
              interfaceOptions={options}
            >
              <IonSelectOption value="brown" class="brown-option">
                Brown
              </IonSelectOption>
              <IonSelectOption value="blonde">Blonde</IonSelectOption>
              <IonSelectOption value="black">Black</IonSelectOption>
              <IonSelectOption value="red">Red</IonSelectOption>
            </IonSelect>
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
      <div></div>
      <IonHeader>
        <IonToolbar>
          <BotonVolver texto="volver" />
          <IonTitle class="ion-text-center">Más datos descriptivos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>content</div>
        <IonGrid>
          <div>grid</div>
          <IonRow>
            <div>row</div>
            <IonCol>
              <div>col</div>
              <Paso2Card
                titulo="modelo"
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
