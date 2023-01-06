import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonItemDivider,
} from "@ionic/react";

export const InputExamples: React.FC = () => {
  const [text, setText] = useState<string>();
  const [text2, setText2] = useState<string>();
  const [text3, setText3] = useState<string>();
  const [number, setNumber] = useState<number>();

  const inputField1 = React.useRef(null) as any;
  const inputField2 = React.useRef(null) as any;

  useEffect(() => {
    alert(inputField1);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonInput Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>
            {text} {text2} {text3}
          </IonItemDivider>
          <IonItem>
            <IonInput
              clearOnEdit={true}
              onIonInput={(e) => {
                if (e.detail.data) {
                  inputField2.current.setFocus();
                }
              }}
              ref={inputField1}
              maxlength={1}
              value={text}
              placeholder="Enter Input"
              onIonChange={(e) => setText(e.detail.value!)}
            ></IonInput>
            <IonInput
              clearOnEdit={true}
              onIonFocus={(event) => {
                (event as any).target?.focus();
              }}
              ref={inputField2}
              maxlength={1}
              value={text2}
              placeholder="Enter Input"
              onIonChange={(e) => setText2(e.detail.value!)}
            ></IonInput>
            <IonInput
              clearOnEdit={true}
              maxlength={1}
              value={text3}
              placeholder="Enter Input"
              onIonChange={(e) => setText3(e.detail.value!)}
            ></IonInput>
          </IonItem>

          <IonItemDivider>
            Input with clear button when there is a value
          </IonItemDivider>
          <IonItem>
            <IonInput
              value={text}
              placeholder="Enter Input"
              onIonChange={(e) => setText(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>

          <IonItemDivider>Number type input</IonItemDivider>
          <IonItem>
            <IonInput
              type="number"
              value={number}
              placeholder="Enter Number"
              onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
            ></IonInput>
          </IonItem>

          <IonItemDivider>Disabled input</IonItemDivider>
          <IonItem>
            <IonInput value={text} disabled></IonInput>
          </IonItem>

          <IonItemDivider>Readonly input</IonItemDivider>
          <IonItem>
            <IonInput value={text} readonly></IonInput>
          </IonItem>

          <IonItemDivider>Inputs with labels</IonItemDivider>

          <IonItem>
            <IonLabel>Default Label</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Floating Label</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="fixed">Fixed Label</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Stacked Label</IonLabel>
            <IonInput value={text}> </IonInput>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
