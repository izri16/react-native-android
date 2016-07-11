const CHANGE_INPUT = 'CHANGE_INPUT';

export const changeMyInput = (text) => {
  return {
    type: CHANGE_INPUT,
    data: text
  }
}
