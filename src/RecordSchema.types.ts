// Temporary added in here. To be replaced with the RecordArray import in the future.
export type RecordArraySelectType = "select" | "selecttag" | "selectid";
export type RecordArrayJsonType = "jsonarray" | "jsonobject";
export type RecordArrayFieldType =
  | "string"
  | "text"
  | "number"
  | "date"
  | "datetime"
  | "time"
  | RecordArraySelectType
  | RecordArrayJsonType;

export const RECORDARRAY_BASIC_TYPES = [
  "select",
  "selecttag",
  "selectid",
  "jsonarray",
  "jsonobject",
  "string",
  "text",
  "number",
  "date",
  "datetime",
  "time",
];

export type RecordArrayRestrictionsType = {
  create?: string;
  read?: string;
  update?: string;
  delete?: string;
  list?: string;
};

export type RecordSchemaMetaType = {
  table: string;
  restriction: RecordArrayRestrictionsType;
};

export type RecordSchemaModelFieldType = {
  field: string;
  label: string;
  type: RecordArrayFieldType;
  restrictions: RecordArrayRestrictionsType;
};

export type RecordSchemaModelType = {
  id: RecordSchemaModelFieldType;
  tag: RecordSchemaModelFieldType;
};

export type RecordSchemaType = {
  meta: RecordSchemaMetaType;
  model: RecordSchemaModelType;
};
