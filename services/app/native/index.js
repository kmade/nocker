
(async (global) => {
  const api = async (uri) => await (await fetch(`${uri}`, {})).json();
  try {
      const config = await api('/api');
      global.App = Object.assign({}, config)
      const module = await import('./src/app.js');
    } catch (error) {
      console.error(error)
    }
})(window);
