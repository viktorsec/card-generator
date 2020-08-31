const getKey = (col) => {
  const map = {
    1: 'type',
    2: 'count',
    3: 'color',
    4: 'image',
    5: 'topLeft',
    6: 'topRight',
    7: 'production',
    8: 'effect',
  };
  return map[col] || col;
}

export const getCards = async function getCards(sheetId, sheetPageNumber) {
  const response = await fetch(`https://spreadsheets.google.com/feeds/cells/${sheetId}/${sheetPageNumber}/public/full?alt=json`);

  const data = await response.json();

  const rows = {};
  data.feed.entry.forEach((entry) => {
    const { row, col, inputValue } = entry.gs$cell;
    if (rows[row] === undefined) {
      rows[row] = {};
    }
    rows[row][getKey(col)] = inputValue;
  })

  delete rows[1];

  return Object.values(rows);
};
