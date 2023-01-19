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

import "./Paso4.css";
import { InfiniteScroll } from "../components/page4/InfiniteScroll";

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
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol>
              <IonCard className="ion-text-center">
                <IonCardContent>
                  <InfiniteScroll></InfiniteScroll>
                </IonCardContent>
              </IonCard>
              <IonCard className="ion-text-center">
                <IonCardContent>
                  <InfiniteScroll></InfiniteScroll>
                </IonCardContent>
              </IonCard>
              <IonCard className="ion-text-center">
                <IonCardContent>
                  <InfiniteScroll></InfiniteScroll>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export { Paso4Page };
