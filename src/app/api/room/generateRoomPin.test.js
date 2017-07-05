import {generateRoomPin} from './index'

test('always pad the value to four digits', () => {
  expect(generateRoomPin(() => 1)).toBe('0001')
  expect(generateRoomPin(() => 32)).toBe('0032')
  expect(generateRoomPin(() => 567)).toBe('0567')
  expect(generateRoomPin(() => 3456)).toBe('3456')
})
