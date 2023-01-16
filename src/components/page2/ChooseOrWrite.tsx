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
  value: string | undefined | null;
  name: string;
}

interface Parameters {
  field: string;
  title: string;
  selectLabel: string;
  manualLabel: string;
  options: option[];
}

// interfaces:
interface ChooseOrWriteProps {
  params: Parameters;
  onSelection: (field: string, value: string, selected: boolean) => void;
}

function onCancel(this: any, refValue: string) {
  if (!this.value || this.value == refValue) {
    this.value = undefined;
  }
  console.log("cancel");
  return;
}

export const ChooseOrWrite: React.FC<ChooseOrWriteProps> = ({
  params,
  onSelection,
}) => {
  const optionRef = useRef<any>(null);
  const manualRef = useRef<any>(null);

  function onOptionSelected(this: any) {
    console.log("onselect" + this.value + optionRef.current.value);
    if (!this.value) {
      this.value = undefined;
    }
  }

  return (
    <IonList>
      <IonItem>
        <IonLabel>{params.selectLabel}</IonLabel>
        <IonSelect
          placeholder="placeholder"
          interface="action-sheet"
          cancelText="cancelar"
          okText="oktexto"
          ref={optionRef}
          onIonChange={onOptionSelected}
          onIonBlur={() =>
            onSelection(params.field, optionRef.current.value, true)
          }
        >
          {params.options.map((option) => (
            <IonSelectOption
              key={option.value ?? "default"}
              value={option.value}
            >
              {option.name}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonLabel>{params.manualLabel}</IonLabel>
        <IonInput
          ref={manualRef}
          onIonBlur={() =>
            onSelection(params.field, manualRef.current.value, false)
          }
        ></IonInput>
      </IonItem>
    </IonList>
  );
};
