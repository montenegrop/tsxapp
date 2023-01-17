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
  IonButton,
} from "@ionic/react";

// css:
import "./Paso2.css";
import { BotonVolver } from "../components/BotonVolver";
import { ChooseOrWrite } from "../components/page2/ChooseOrWrite";
import { useState, useEffect } from "react";

const optionsModel = [
  { name: "Fiat", value: "fiat" },
  { name: "Renault", value: "renault" },
  { name: "---borrar---", value: null },
];
const optionsColor = [
  { name: "Rojo", value: "rojo" },
  { name: "Azúl", value: "azúl" },
  { name: "*borrar-selección", value: null },
];

const cardsParams = {
  modelo: {
    field: "modelo",
    title: "Modelo",
    selectLabel: "elegir:",
    manualLabel: "escribir:",
    options: optionsModel,
  },
  color: {
    field: "color",
    title: "Color",
    selectLabel: "elegir:",
    manualLabel: "escribir:",
    options: optionsColor,
  },
};

// color:

function continuarPasoTres() {
  console.log("cont");
}

interface cardParams {
  value: string;
  selected: boolean;
}

interface state {
  modelo: cardParams | null;
  color: cardParams | null;
}

const Paso2Page: React.FC = () => {
  const [state, setState] = useState<state>({ modelo: null, color: null });

  function getValues(field: string, value: string, selected: boolean) {
    console.log("getvalue" + field);

    const stateField: any = {};
    stateField[field] = { value: value, selected: selected };
    setState({ ...state, ...stateField });
  }

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

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
                <IonTitle>{cardsParams.modelo.title}</IonTitle>
                <ChooseOrWrite
                  params={cardsParams.modelo}
                  onSelection={getValues}
                ></ChooseOrWrite>
              </IonCardContent>
            </IonCard>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCard className="ion-text-center">
              <IonCardContent>
                <IonTitle>{cardsParams.color.title}</IonTitle>
                <ChooseOrWrite
                  params={cardsParams.color}
                  onSelection={getValues}
                ></ChooseOrWrite>
              </IonCardContent>
            </IonCard>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonButton
              onClick={() => continuarPasoTres()}
              color="warning"
              shape="round"
            >
              Continuar
            </IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export { Paso2Page };
