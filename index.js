var newObj = {};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  let newObj = Object.assign({}, object);
  neObj = object;
  delete object[key];
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
}
