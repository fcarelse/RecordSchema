import { isNonEmptyString } from "fxcie-utils";
import { RecordSchemaType } from "./RecordSchema.types";
import { DEFAULT_META, DEFAULT_MODEL } from "./RecordSchema.values";

export class RecordSchema {
  private meta: object = { ...DEFAULT_META };
  private model: object = { ...DEFAULT_MODEL };

  toJSON() {
    return JSON.stringify({ meta: this.meta, model: this.model });
  }

  static genFromJSON(temp: RecordSchemaType) {
    if (!(temp instanceof Object)) return false;
    const meta = { ...temp.meta };
  }

  static isValidMeta(sample: any) {
    if (!(sample instanceof Object)) return false;
    return true;
  }

  static isValidModel(sample: any) {
    if (!(sample instanceof Object)) return false;
    const fields = Object.keys(sample);
    return fields.reduce((fail, field) => {
      if (isNonEmptyString(sample[field])) fail = false;
      if (!sample[field].label) return false;
      return fail;
    }, true);
  }
}
