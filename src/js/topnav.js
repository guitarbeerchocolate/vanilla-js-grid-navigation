const topnav = function() {
  const el = document.querySelector('.topnav');
  this.toggle = el.querySelector('.topnav__item--toggle');
  this.navItems = el.querySelector('.topnav__items');
  this.toggle.addEventListener('click', () => {
    this.toggleMenu();
  });

  window.addEventListener('resize', () => {
    this.openBelow();
  });
};

topnav.prototype.openBelow = function() {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (width < 640) {
    this.navItems.style.display = 'none';
    this.toggle.style.display = 'block';
  } else {
    this.navItems.setAttribute('style', 'visibility:visible');
    this.toggle.style.display = 'none';
  }
}

topnav.prototype.toggleMenu = function() {
  if (this.navItems.style.display === 'block') {
    this.navItems.style.display = 'none';
  } else {
    this.navItems.style.display = 'block';
  }
}

module.exports = new topnav();
