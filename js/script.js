tippy('[data-tippy-content]', {
  placement: 'top-end',
  arrow: true,
  delay: [100, 200],
  hideOnClick: true,
});

var myModalEl = document.getElementById('addStep')
myModalEl.addEventListener('hidden.bs.modal', function (event) {
  // do something...
})