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
  IonAvatar,
} from "@ionic/react";
import { useLayoutEffect, useRef, useState } from "react";

import { BotonVolver } from "../components/BotonVolver";

import "./Paso4.css";
import { InfiniteScroll } from "../components/page4/InfiniteScroll";
import React from "react";
import * as ReactDOM from "react-dom";
import { Virtuoso } from "react-virtuoso";

const Option1 = {
  text: "opcion1",
};

const Paso4Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <BotonVolver texto="volver" />
          <IonTitle class="ion-text-center">Sobre la infracción</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Virtuoso
          style={{ height: "40%" }}
          totalCount={15}
          itemContent={(index) => {
            return (
              <div style={{ height: "56px" }}>
                <IonItem>
                  <IonAvatar slot="start">
                    <img src="https://picsum.photos/seed/picsum/40/40" />
                  </IonAvatar>
                  <IonLabel>{index}</IonLabel>
                </IonItem>
              </div>
            );
          }}
        />
        <Virtuoso
          style={{ height: "100%" }}
          totalCount={1}
          itemContent={(index) => {
            return (
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
            );
          }}
        />
      </IonContent>
    </IonPage>
  );
};

export { Paso4Page };
