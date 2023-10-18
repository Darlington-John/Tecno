export const toggleNav = () => {
  const navElement = document.getElementById('myNav');

  if (navElement.style.height === '100%') {
    navElement.style.height = '0%';
  } else {
    navElement.style.height = '100%';
  }
};

export default toggleNav;
