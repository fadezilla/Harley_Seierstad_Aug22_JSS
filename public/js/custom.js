function open_new_window(location) {
  window.location.href = location;
}
window.addEventListener('unload', function() {
  localStorage.clear();
});
