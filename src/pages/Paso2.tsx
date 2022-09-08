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
              <IonCard className="ion-text-center">
                <IonCardContent className="ion-text-center">
                  <BotonRedondo
                    color={estilosProps.botonRedondo.color}
                    texto="modelo"
                  ></BotonRedondo>
                  <IonList>
                    <IonItem>
                      <IonLabel
                        style={estilos.label}
                        position="fixed"
                        className="mr-0"
                      >
                        Ingreso manual:
                      </IonLabel>
                      <IonInput value={text}></IonInput>
                    </IonItem>
                    <IonItem>
                      <IonLabel style={estilos.label} position="fixed">
                        Seleccionar:
                      </IonLabel>
                      <IonInput value={text}></IonInput>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle color={"dark"}>Color:</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonInput
                    type="text"
                    size={3}
                    style={estilos.col}
                    value={text}
                    color="dark"
                    placeholder="Enter modelo"
                    onIonChange={(e) => setText(e.detail.value!)}
                    clearInput
                  ></IonInput>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                  <IonCardTitle>Card Title</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  Keep close to Nature's heart... and break clear away, once in
                  awhile, and climb a mountain or spend a week in the woods.
                  Wash your spirit clean.
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export { Paso2Page };
