
document.addEventListener('DOMContentLoaded', function() {
  new Main;
  new MobileMenu;
});

class Main {
  constructor() {
    this._init();
  }

  _init() {
    Pace.on('done', this._paceDone.bind(this));
  }

  _paceDone() {
    this._scroll();
  }

  _inviewAnimation(el, inview) {
    if(inview) {
        el.classList.add('inview');
    } else {
        el.classList.remove('inview');
    }
  }

  _scroll() {
    new ScrollObserver('.skill__items', this._inviewAnimation.bind(this), {rootMargin: "0px 0px -200px 0px"});
    new ScrollObserver('.top__title', this._inviewAnimation.bind(this), {rootMargin: "0px 0px -200px 0px"});
    new ScrollObserver('.appear', this._inviewAnimation.bind(this), {rootMargin: "0px 0px -200px 0px"});
  }
}





class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.hamburger');
    this.DOM.menu = document.querySelector('.globalMenuSp');
    this.eventType = this._getEventType();
    this._addEvent();
  }
  _getEventType() {
    return window.ontouchstart ? 'touchstart' : 'click';
  }
  _toggle() {
    this.DOM.btn.classList.toggle('open');
    this.DOM.menu.classList.toggle('open');
  }
  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.menu.addEventListener(this.eventType, this._toggle.bind(this));
  }
}


