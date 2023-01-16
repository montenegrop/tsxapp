import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useRef } from "react";

interface option {
  value: string | undefined;
  name: string;
}

// interfaces:
interface ChooseOrWriteProps {
  manualLabel: string;
  selectLabel: string;
  options: option[];
  onManualChange: any;
  onOptionSelect: any;
}

function onCancel(this: any) {
  this.value = undefined;
  return;
}
function handleManualChange(ref: React.MutableRefObject<any>) {
  console.log({ ref: ref.current.value });
}
function handleOptionChange(ref: React.MutableRefObject<any>) {
  console.log({ ref: ref.current.value });
}

export const ChooseOrWrite: React.FC<ChooseOrWriteProps> = ({
  manualLabel,
  selectLabel,
  options,
  onManualChange,
  onOptionSelect,
}) => {
  const manualRef = useRef<any>(null);
  const optionRef = useRef<any>(null);

  return (
    <IonList>
      <IonItem>
        <IonLabel>{selectLabel}</IonLabel>
        <IonSelect
          placeholder="placeholder"
          interface="action-sheet"
          cancelText="cancelar"
          okText="oktexto"
          ref={optionRef}
          onIonChange={() => handleOptionChange(optionRef)}
          onIonCancel={onCancel}
        >
          {options.map((option) => (
            <IonSelectOption key={option.value} value={option.value}>
              {option.name}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonLabel>{manualLabel}</IonLabel>
        <IonInput
          ref={manualRef}
          onIonChange={() => handleManualChange(manualRef)}
        ></IonInput>
      </IonItem>
    </IonList>
  );
};
