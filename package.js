Package.describe({
  summary: "Leaflet.label is plugin for adding labels to markers & shapes on leaflet powered maps."
});

Package.on_use(function (api, where) {
  api.add_files('leaflet.label.js', 'client');
  api.add_files('leaflet.label.css', 'client');
});
