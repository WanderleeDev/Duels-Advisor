export interface IDataItem {
  text: string;
  icon?: string;
}

export interface IListBasic {
  title?: string;
  list: IDataItem[];
}