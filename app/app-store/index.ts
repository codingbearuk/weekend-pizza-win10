export interface Action {
  type: string;
  payload?: any;
}

export interface ActionFunction {
  (payload?: any): Action;
}

export interface Reducer {
  (state: any, action: Action): any;
}
