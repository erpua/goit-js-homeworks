function refreshList(data, root) {
  const html = data.map(e => `<li>${e}</li>`);
  root.insertAdjacentHTML('afterbegin', html);
}

export default refreshList;
