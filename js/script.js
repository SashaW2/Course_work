document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.sort__button').addEventListener('click', function() {
    const max = document.getElementById("max_size");
    const min = document.getElementById("min_size");

    const max_size = parseFloat(max.value);
    const min_size = parseFloat(min.value);

    let sort = document.querySelector('.section-2');

    for (let i = 0; i < sort.children.length; i++) {
      for (let j = i; j < sort.children.length; j++) {
        if (+sort.children[i].getAttribute('data-sort') > +sort.children[j].getAttribute('data-sort')) {
          let replaceNode = sort.replaceChild(sort.children[j], sort.children[i]);
          insertAfter(replaceNode, sort.children[i]);
        }
      }
    }

    for (let i = 0; i < sort.children.length; i++) {
      if (+sort.children[i].getAttribute('data-sort') < min_size || +sort.children[i].getAttribute('data-sort') > max_size) {
        sort.children[i].classList.toggle('close');
      }
    }
  });

  function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
  }

  document.querySelector('.sort__image').addEventListener('click', function() {
    const max = document.getElementById("max_size");
    const min = document.getElementById("min_size");

    const max_size = parseFloat(max.value);
    const min_size = parseFloat(min.value);

    let sort = document.querySelector('.section-2');

    for (let i = 0; i < sort.children.length; i++) {
      for (let j = i; j < sort.children.length; j++) {
        if (+sort.children[i].getAttribute('data-sort') > +sort.children[j].getAttribute('data-sort')) {
          let replaceNode = sort.replaceChild(sort.children[j], sort.children[i]);
          insertAfter(replaceNode, sort.children[i]);
        }
      }
    }

    for (let i = 0; i < sort.children.length; i++) {
      if (+sort.children[i].getAttribute('data-sort') < min_size || +sort.children[i].getAttribute('data-sort') > max_size) {
        sort.children[i].classList.toggle('close');
      }
    }
  });

  function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
  }
});







