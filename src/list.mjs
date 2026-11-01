export const EMPTY_STATE = 'No items yet'

export const List = ({ items }) =>
  items.length === 0 ? EMPTY_STATE : items.map((item) => `<li>${item}</li>`).join('')
