import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";

interface DisplayGridProps {
  plateType: number[];
  values: string[];
}

function plateArr(arr: number, index: number, array: number[]) {
  return (
    <>
      {Array.from(Array(arr).keys()).map((value) => (
        <IonButton
          key={value}
          className={"only-here-1 plate-type-" + (arr % 2).toString()}
        >
          {value}
        </IonButton>
      ))}
      {index !== array.length - 1 && (
        <IonButton key={arr} className="only-here-1 plate-separator">
          -
        </IonButton>
      )}
    </>
  );
}

export const DisplayGrid: React.FC<DisplayGridProps> = ({
  plateType,
  values,
}) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          {values.map((value) => (
            <IonButton key={value} className="only-here-1">
              {value}
            </IonButton>
          ))}
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          {plateType.map((arr, index, array) => (
            <React.Fragment key={arr}>
              {plateArr(arr, index, array)}
            </React.Fragment>
          ))}
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
