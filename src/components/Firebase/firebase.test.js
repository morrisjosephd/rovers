import firebase from 'firebase/app'

import Firebase from './firebase'
import { transformedFakeOrders, fakeOrders} from '../../fakeData'

jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(),
  database: jest.fn()
}))

describe('Firebase', () => {

  describe('Get Orders', () => {
    it('returns an array of orders', async () => {
      const mockRef = { on: jest.fn() }
      const mockDatabase = { ref: () => mockRef }
      firebase.database.mockReturnValue(mockDatabase)

      const firebaseWrapper = new Firebase()
      const result = firebaseWrapper.getOrders()

      const [eventName, onValueCallback] = mockRef.on.mock.calls[0]
      onValueCallback({ val: () => fakeOrders })

      expect(eventName).toEqual('value')
      expect(await result).toEqual(transformedFakeOrders)
    })
  })
})