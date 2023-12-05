const setObjectByKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const setValueKey = (key, value) => {
  localStorage.setItem(key, value);
};

const getValueKey = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const removeValueKey = (key) => {
  localStorage.removeItem(key);
};

export { setValueKey, getValueKey, removeValueKey, setObjectByKey };
