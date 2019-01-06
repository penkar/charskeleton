// @flow
function hashToJson():Object {
  const hashState:Object = new Object, hash:string = window.location.hash

    hash.slice(1, hash.length)
    .split("&")
    .map(param => param.split("="))
    .forEach(([key,value]) => hashState[key] = value);
  return hashState;
}

function jsonToHash(json:{[String]:String}):string {
  const currentURL:Object = hashToJson(), searchString = [];
  Object.entries(json).forEach(([key, value]:Array) => {
    searchString.push(`${key}=${value}`);
  });
  return `#${searchString.join("&")}`;
}

const HashUtilities:Object = {
  hashToJson,
  jsonToHash
}

export default HashUtilities;
