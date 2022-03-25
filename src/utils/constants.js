export const getMuiDateFormat = (givenDate) => {
  let dateNow;
  if (givenDate) {
    dateNow = new Date(givenDate);
  } else {
    dateNow = new Date();
  }
  const year = dateNow.getFullYear(); // * Getting current year from the created Date object
  const monthWithOffset = dateNow.getUTCMonth() + 1; // * January is 0 by default in JS. Offsetting +1 to fix date for calendar.
  const month = // * Setting current Month number from current Date object
    monthWithOffset.toString().length < 2 // * Checking if month is < 10 and pre-prending 0 to adjust for date input.
      ? `0${monthWithOffset}`
      : monthWithOffset;

  const date =
    dateNow.getUTCDate().toString().length < 2 // * Checking if date is < 10 and pre-prending 0 if not to adjust for date input.
      ? `0${dateNow.getUTCDate()}`
      : dateNow.getUTCDate();

  return `${year}-${month}-${date}`; // * combining to format for defaultValue or value attribute of material <TextField>
};
export const getTotal = (items, prop) => {
  return items.reduce((a, b) => {
    return a + b[prop];
  }, 0);
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const LOCALSTORAGE_TOKEN_KEY = 'spa-token';

export const removeEmptyNullProps = (obj) => {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, v]) => v != null && v !== '')
      .map(([k, v]) => [k, v === Object(v) ? removeEmptyNullProps(v) : v])
  );
};

export const clearEmptiesObj = (o) => {
  for (var k in o) {
    if (!o[k] || typeof o[k] !== 'object') {
      continue; // If null or not an object, skip to the next iteration
    }

    // The property is an object
    clearEmptiesObj(o[k]); // <-- Make a recursive call on the nested object
    if (Object.keys(o[k]).length === 0) {
      delete o[k]; // The object had no properties, so delete that property
    }
  }
  return o;
};
