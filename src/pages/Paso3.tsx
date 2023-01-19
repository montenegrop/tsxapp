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
  IonItem,
  IonLabel,
  IonCheckbox,
  IonCol,
} from "@ionic/react";
import { useLayoutEffect, useRef, useState } from "react";

import { BotonVolver } from "../components/BotonVolver";

import "./Paso3.css";

const Option1 = {
  text: "opcion1",
};

const Paso3Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <BotonVolver texto="volver" />
          <IonTitle class="ion-text-center">Sobre la infracción</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol>
              <IonCard className="ion-text-center">
                <IonCardContent>
                  <IonTitle>Afectados</IonTitle>
                  <IonItem>
                    <IonCheckbox
                      className="page3-checkbox"
                      slot="start"
                    ></IonCheckbox>
                    <IonLabel>Otros conductores</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonCheckbox
                      className="page3-checkbox"
                      slot="start"
                    ></IonCheckbox>
                    <IonLabel>Peatones</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonCheckbox
                      className="page3-checkbox"
                      slot="start"
                    ></IonCheckbox>
                    <IonLabel>Ciclistas</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonCheckbox
                      className="page3-checkbox"
                      slot="start"
                    ></IonCheckbox>
                    <IonLabel>Otro</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonCheckbox
                      className="page3-checkbox"
                      slot="start"
                    ></IonCheckbox>
                    <IonLabel>No aplica</IonLabel>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="ion-text-center">
                <IonCardContent>
                  <IonTitle>Gravedad</IonTitle>
                  <IonItem>
                    <IonCheckbox
                      className="page3-checkbox"
                      slot="start"
                    ></IonCheckbox>
                    <IonLabel>
                      Desubicación, causa incomodidades, complciaciones
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonCheckbox
                      className="page3-checkbox"
                      slot="start"
                    ></IonCheckbox>
                    <IonLabel>Infracción de tránsito común</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonCheckbox
                      className="page3-checkbox"
                      slot="start"
                    ></IonCheckbox>
                    <IonLabel>Infracción de tránsito disruptiva</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonCheckbox
                      className="page3-checkbox"
                      slot="start"
                    ></IonCheckbox>
                    <IonLabel>Infracción muy peligrosa, inmoral</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonCheckbox
                      className="page3-checkbox"
                      slot="start"
                    ></IonCheckbox>
                    <IonLabel>No aplica</IonLabel>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export { Paso3Page };
