import firebase from 'firebase/app'
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
}

class Firebase {
  constructor () {
    firebase.initializeApp(config)

    this.database = firebase.database()
  }

  getOrders = () => {
    const ordersRef = this.database.ref('orders')

    return new Promise((resolve, reject) => {
      ordersRef.on('value', snapshot => {
        resolve(transformOrdersWithKey(snapshot.val(), 'id'))
      })
    })
  }
}

const transformOrdersWithKey = (obj, keyAs) => {
  return Object.entries(obj).map(([key, value]) => ({ ...value, [keyAs]: key }))
}

export default Firebase
