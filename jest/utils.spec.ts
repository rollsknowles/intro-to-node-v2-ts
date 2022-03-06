import { mapObjectToArray, getNewUser } from './utils'

describe('mapObjectToArray()', () => {
    test('maps values to array using callback', () => {
        const result = mapObjectToArray(
            {
                age: 30,
                height: 65,
            },
            (k: string, v: number) => {
                return v + 10
            }
        )

        expect(result).toEqual([40, 75])
    })

    test('callback gets called', () => {
        const mockCb = jest.fn()
        const result = mapObjectToArray({ age: 30, height: 65 }, mockCb)

        expect(mockCb.mock.calls.length).toBe(2)
    })
})

describe('getNewUser', () => {
    test('user does exist', async () => {
        const user = await getNewUser(1)

        expect(user).toBeTruthy()
        expect(user.verified).toBe(false)
    })

    test('no user found', async () => {
        expect.assertions(1)
        try {
            const user = await getNewUser(1234)
        } catch (e) {
            expect(e).toBeTruthy()
        }
    })
})
