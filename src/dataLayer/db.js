import {
  get,
  getDatabase,
  orderByKey,
  push,
  query,
  ref,
  set,
} from "firebase/database";

export async function insertDataDb(url, method, header, postData) {
  try {
    let db = getDatabase();
    let refData = ref(db, url);
    let newUserRef = push(refData);
    const data = await set(newUserRef, postData);
  } catch (err) {
    console.log(err);
  }
}
export async function updateDataDb(url, method, header, postData) {
  try {
    let db = getDatabase();
    let refData = ref(db, url);
    //let newUserRef = push(refData);
    const data = await set(refData, postData);
  } catch (err) {
    console.log(err);
  }
}
export async function getDataDb(url, method, header) {
  var data = [];
  try {
    var db = getDatabase();
    var reference = ref(db, url);
    var customQuery = query(reference, orderByKey());
    var snapShot = await get(customQuery);
    if (snapShot.exists()) {
      data = [...Object.values(snapShot.val())];
    }
  } catch (err) {
    console.log(err);
  }
  return data;
}

export async function getAsByteArray(file) {
  return new Uint8Array(await getByteFromSource(file));
}

export function getByteFromSource(file) {
  return new Promise((resolve, reject) => {
    // Create file reader
    let reader = new FileReader();

    // Register event listeners
    reader.addEventListener("loadend", (e) => resolve(e.target.result));
    reader.addEventListener("error", reject);

    // Read file
    reader.readAsArrayBuffer(file);
  });
}
export function getSourceFromByte(intArray) {
  // Obtain a blob: URL for the image data.
  // var arrayBufferView = new Uint8Array( this.response );
  var arrayBufferView = new Uint8Array(intArray);
  var blob = new Blob([arrayBufferView], { type: "image/jpg" });
  var urlCreator = window.URL || window.webkitURL;
  var imageUrl = urlCreator.createObjectURL(blob);
  // var img = document.querySelector( "#photo" );
  // img.src = imageUrl;
  return imageUrl;
}
