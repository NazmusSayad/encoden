import Logic from './logic'

export { Logic }
export default new Logic(
  [
    '0123456789',
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ].join('')
)
