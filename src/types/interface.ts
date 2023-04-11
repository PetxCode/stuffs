export interface iButton {
  title: string;
}

export type iButtonData<T> = {
  [props in keyof T]?: T[props];
};
