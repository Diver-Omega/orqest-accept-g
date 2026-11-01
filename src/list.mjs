export const EMPTY_STATE = 'No items yet'

export const List = ({ items }) => items.map((item) => `<li>${item}</li>`).join('')
