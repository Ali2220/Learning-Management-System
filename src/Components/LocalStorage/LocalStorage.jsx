export const data = [
  {
    id: 1,
    firstName: 'Ali',
    email: 'ali@example.com',
    password: '123',
  },
  {
    id: 2,
    firstName: 'Alina',
    email: 'alina@example.com',
    password: '123',
  },
  {
    id: 3,
    firstName: 'Umer',
    email: 'umer@example.com',
    password: '123',
  },
];

export const setLocalStorage = () => {
  localStorage.setItem('users', JSON.stringify(data));
};

export const getLocalStorage = () => {
  const users = JSON.parse(localStorage.getItem('users'));

  return { users };
};
