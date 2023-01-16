import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

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
  onOpntionSelect: any;
}

function onCancel(this: any) {
  console.log(this);
  this.value = undefined;
  return;
}

export const ChooseOrWrite: React.FC<ChooseOrWriteProps> = ({
  manualLabel,
  selectLabel,
  options,
  onManualChange,
  onOpntionSelect,
}) => {
  return (
    <IonList>
      <IonItem>
        <IonLabel>{selectLabel}</IonLabel>
        <IonSelect
          placeholder="placeholder"
          interface="action-sheet"
          cancelText="cancelar"
          okText="oktexto"
          onIonChange={(e) => console.log(e.detail.value)}
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
          onIonChange={(e) => onOpntionSelect(e.detail.value!)}
        ></IonInput>
      </IonItem>
    </IonList>
  );
};
