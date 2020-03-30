var newObj = Object.assign({},object);

function updateObjectWithKeyAndValue(object, key, value) {
  newObj[key] = value;
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  delete newObj[key];
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
