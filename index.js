var newObj = {};

function updateObjectWithKeyAndValue(object, key, value) {
  let newObj = Object.assign({}, object);
  neObj = object;
  object[key] = value;
  return object;
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
