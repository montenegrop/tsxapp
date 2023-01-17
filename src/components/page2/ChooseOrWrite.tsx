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

// function onCancel(this: any, refValue: string) {
//   if (!this.value || this.value == refValue) {
//     this.value = undefined;
//   }
//   console.log("cancel");
//   return;
// }

let selectThis: any = undefined;
let manualThis: any = undefined;
let autoTrigger: boolean = false;

// if (!this.value) {
//   this.value = undefined;
// }

export const ChooseOrWrite: React.FC<ChooseOrWriteProps> = ({
  params,
  onSelection,
}) => {
  // fix: el primer ref seria mejor undefined pero no se puede
  const optionRef = useRef<any>(null);
  const manualRef = useRef<any>(null);

  function onOptionSelected(this: any) {
    selectThis = this;
    if (manualThis?.value && !autoTrigger) {
      autoTrigger = true;
      manualThis.value = "";
    }
    autoTrigger = false;
    onSelection(params.field, optionRef.current.value, true);
  }

  function onManualInput(this: any) {
    manualThis = this;
    if (manualThis?.value && !autoTrigger) {
      autoTrigger = true;
      selectThis.value = undefined;
    }
    autoTrigger = false;
    onSelection(params.field, manualRef.current.value, false);
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
          //   onIonChange={onOptionSelected}
          onIonChange={onOptionSelected}
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
        <IonInput ref={manualRef} onIonChange={onManualInput}></IonInput>
      </IonItem>
    </IonList>
  );
};
