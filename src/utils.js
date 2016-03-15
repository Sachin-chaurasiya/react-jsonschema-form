import PasswordWidget from "./components/widgets/PasswordWidget";
import RadioWidget from "./components/widgets/RadioWidget";
import UpDownWidget from "./components/widgets/UpDownWidget";
import RangeWidget from "./components/widgets/RangeWidget";
import SelectWidget from "./components/widgets/SelectWidget";
import TextareaWidget from "./components/widgets/TextareaWidget";


const altWidgetMap = {
  boolean: {
    radio: RadioWidget,
    select: SelectWidget,
  },
  string: {
    password: PasswordWidget,
    radio: RadioWidget,
    select: SelectWidget,
    textarea: TextareaWidget,
  },
  number: {
    updown: UpDownWidget,
    range: RangeWidget,
  },
  integer: {
    updown: UpDownWidget,
    range: RangeWidget,
  }
};

export function defaultTypeValue(type) {
  switch (type) {
  case "array":     return [];
  case "boolean":   return false;
  case "date-time": return "";
  case "number":    return 0;
  case "object":    return {};
  case "string":    return "";
  default:        return undefined;
  }
}

export function defaultFieldValue(formData, schema) {
  return formData === null ? defaultTypeValue(schema.type) : formData;
}

export function getAlternativeWidget(type, widget) {
  if (typeof widget === "function") {
    return widget;
  }
  if (typeof widget !== "string") {
    throw new Error(`Unsupported widget definition: ${typeof widget}`);
  }
  if (!altWidgetMap.hasOwnProperty(type)) {
    throw new Error(`No alternative widget for type ${type}`);
  }
  if (!altWidgetMap[type].hasOwnProperty(widget)) {
    throw new Error(`No alternative widget "${widget}" for type ${type}`);
  }
  return altWidgetMap[type][widget];
}

function computeDefaults(schema, parentDefaults) {
  // Compute the defaults recursively: give highest priority to deepest nodes.
  let defaults = parentDefaults;
  if (isObject(defaults) && isObject(schema.default)) {
    // For object defaults, only override parent defaults that are defined in
    // schema.default.
    defaults = mergeObjects(defaults, schema.default);
  } else if ("default" in schema) {
    // Use schema defaults for this node.
    defaults = schema.default;
  }
  // Not defaults defined for this node, fallback to generic typed ones.
  if (typeof(defaults) === "undefined") {
    defaults = defaultTypeValue(schema.type);
  }
  // We need to recur for object schema inner default values.
  if (schema.type === "object") {
    return Object.keys(schema.properties).reduce((acc, key) => {
      // Compute the defaults for this node, with the parent defaults we might
      // have from a previous run: defaults[key].
      acc[key] = computeDefaults(schema.properties[key], defaults[key]);
      return acc;
    }, {});
  }
  return defaults;
}

export function getDefaultFormState(schema, formData) {
  if (!isObject(schema)) {
    throw new Error("Invalid schema: " + schema);
  }
  const defaults = computeDefaults(schema);
  if (typeof(formData) === "undefined") { // No form data? Use schema defaults.
    return defaults;
  }
  if (isObject(formData)) { // Override schema defaults with form data.
    return mergeObjects(defaults, formData);
  }
  return formData || defaults;
}

function isObject(thing) {
  return typeof(thing) == "object" && thing !== null && !Array.isArray(thing);
}

export function mergeObjects(obj1, obj2) {
  // Recursively merge deeply nested objects.
  var acc = Object.assign({}, obj1); // Prevent mutation of source object.
  return Object.keys(obj2).reduce((acc, key) =>{
    const right = obj2[key];
    if (obj1.hasOwnProperty(key) && isObject(right)) {
      acc[key] = mergeObjects(obj1[key], right);
    } else {
      acc[key] = right;
    }
    return acc;
  }, acc);
}

export function asNumber(value) {
  if (/\.$/.test(value)) {
    // "3." can't really be considered a number even if it parses in js. The
    // user is most likely entering a float.
    return value;
  }
  const n = Number(value);
  const valid = typeof n === "number" && !Number.isNaN(n);
  return valid ? n : value;
}

export function orderProperties(properties, order) {
  if (!Array.isArray(order)) {
    return properties;
  }
  if (order.length !== properties.length) {
    throw new Error(
      "uiSchema order list length should match object properties length");
  }
  const fingerprint = (arr) => [].slice.call(arr).sort().toString();
  if (fingerprint(order) !== fingerprint(properties)) {
    throw new Error(
      "uiSchema order list does not match object properties list");
  }
  return order;
}

export function isMultiSelect(schema) {
  return Array.isArray(schema.items.enum) && schema.uniqueItems;
}