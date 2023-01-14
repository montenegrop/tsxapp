import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";

interface DisplayPlateProps {
  plateType: number[];
  values: string[];
  index: number;
  onChange: any;
}

function getPlateIndex(
  localPlateIndex: number,
  plateType: number[],
  plateTypeIndex: number
): number {
  const plateTypeSliced = plateType.slice(0, plateTypeIndex);
  return (
    plateTypeSliced.reduce((partial, curr) => partial + curr, 0) +
    localPlateIndex
  );
}

function plateArr(
  arr: number,
  arr_index: number,
  plateType: number[],
  plate: string[],
  onChange: any
) {
  return (
    <>
      {Array.from(Array(arr).keys()).map((localIndex) => {
        const plateIndex = getPlateIndex(localIndex, plateType, arr_index);
        return (
          <IonButton
            key={plateIndex}
            className={"only-here-1 plate-type-" + (arr % 2).toString()}
          >
            {plate[plateIndex]}
          </IonButton>
        );
      })}
    </>
  );
}

export const DisplayPlate: React.FC<DisplayPlateProps> = ({
  plateType,
  values,
  index,
  onChange,
}) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          {plateType.map((arr, index, array) => (
            <React.Fragment key={index}>
              {plateArr(arr, index, array, values, onChange)}
              {index !== plateType.length - 1 && (
                <IonButton className="only-here-1 plate-separator">-</IonButton>
              )}
            </React.Fragment>
          ))}
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
