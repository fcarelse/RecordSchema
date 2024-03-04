import { isNonEmptyString, isObject } from "fxcie-utils";
import {
  RECORDSCHEMA_BASIC_TYPES,
  RECORDSCHEMA_SELECT_TYPES,
  RecordSchemaModelType,
  RecordSchemaType,
} from "./RecordSchema.types";
import { DEFAULT_META, DEFAULT_MODEL } from "./RecordSchema.values";

export class RecordSchema {
  private meta: object = { ...DEFAULT_META };
  private model: object = { ...DEFAULT_MODEL };

  toJSON() {
    return JSON.stringify({ meta: this.meta, model: this.model });
  }

  static genFromJSON(temp: RecordSchemaType) {
    if (!isObject(temp)) return false;
    const meta = { ...temp.meta };
  }

  static isValidMeta(sample: any) {
    if (!isObject(sample)) return false;
    if (isNonEmptyString(sample.table)) return false;
    return true;
  }

  static isValidModel(sample: any) {
    if (!(sample instanceof Object)) return false;
    const fields = Object.keys(sample);
    for (const field in fields) {
      if (isNonEmptyString(sample[field].field)) return false;
      if (isNonEmptyString(sample[field].label)) return false;
      if (isNonEmptyString(sample[field].type)) return false;
      if (RECORDSCHEMA_SELECT_TYPES.includes(sample[field].type)) {
        if (isNonEmptyString(sample[field].select)) return false;
      } else if (!RECORDSCHEMA_BASIC_TYPES.includes(sample[field].type)) {
        return false;
      }
    }
    return true;
  }
}
