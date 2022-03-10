import {getDatabase, onValue, ref, set, push} from "firebase/database";
const db = getDatabase();

export default {
  async query(path, isNoneKey) {
    let response = new Promise((resolve) => {
      onValue(ref(db, path), (snapshot) => {
        let data = []
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          if (!isNoneKey) {
            childData.key = childKey
          }
          data.push(childData)
        })
        resolve(data)
      })
    })
    return response
  },
  async queryChild(path) {
    let response = new Promise((resolve) => {
      onValue(ref(db, path), (snapshot) => {
        let data = {}
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          data[childKey] = childData
        });
        resolve(data)
      })
    })
    return response
  },
  post(path, data) {
    return set(ref(db, path), data)
  },
  push(path, data) {
    return push(ref(db, path), data)
  }
}
