export interface TableDropdownOptions {
  actions: Array<TableDropdownAction>;
}

export interface TableDropdownAction {
  label: string;
  onClick: any;
}
