import { isNonEmptyString } from "fxcie-utils";
import { DEFAULT_META, DEFAULT_MODEL } from "./RecordSchema.values";
export class RecordSchema {
    constructor() {
        this.meta = Object.assign({}, DEFAULT_META);
        this.model = Object.assign({}, DEFAULT_MODEL);
    }
    toJSON() {
        return JSON.stringify({ meta: this.meta, model: this.model });
    }
    static genFromJSON(temp) {
        if (!(temp instanceof Object))
            return false;
        const meta = Object.assign({}, temp.meta);
    }
    static isValidMeta(sample) {
        if (!(sample instanceof Object))
            return false;
        return true;
    }
    static isValidModel(sample) {
        if (!(sample instanceof Object))
            return false;
        const fields = Object.keys(sample);
        return fields.reduce((fail, field) => {
            if (isNonEmptyString(sample[field]))
                fail = false;
            if (!sample[field].label)
                return false;
            return fail;
        }, true);
    }
}
