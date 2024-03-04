export type RecordSchemaSelectType = "select" | "selecttag" | "selectid";
export type RecordSchemaJsonType = "jsonarray" | "jsonobject";
export type RecordSchemaFieldType =
  | "string"
  | "text"
  | "number"
  | "date"
  | "datetime"
  | "time"
  | RecordSchemaJsonType;

export const RECORDSCHEMA_BASIC_TYPES = [
  "jsonarray",
  "jsonobject",
  "string",
  "text",
  "number",
  "date",
  "datetime",
  "time",
];

export const RECORDSCHEMA_SELECT_TYPES = ["select", "selectid", "selecttag"];

export const RECORDSCHEMA_TYPES = ["select", "selectid", "selecttag"];

export type RecordSchemaAuthType = {
  create: string;
  read: string;
  update: string;
  delete: string;
  list: string;
};

export type RecordSchemaMetaType = {
  table: string;
  auth?: RecordSchemaAuthType;
};

export type RecordSchemaModelFieldSelectType = {
  field: string;
  label: string;
  type: RecordSchemaSelectType;
  select: string;
  auth?: RecordSchemaAuthType;
};

export type RecordSchemaModelFieldValueType = {
  field: string;
  label: string;
  type: RecordSchemaFieldType;
  auth?: RecordSchemaAuthType;
};

export type RecordSchemaModelFieldType =
  | RecordSchemaModelFieldSelectType
  | RecordSchemaModelFieldValueType;

export type RecordSchemaFieldName = "id" | "tag" | string;

export type RecordSchemaModelType = Record<
  RecordSchemaFieldName,
  RecordSchemaModelFieldType
>;

export type RecordSchemaType = {
  meta: RecordSchemaMetaType;
  model: RecordSchemaModelType;
};
