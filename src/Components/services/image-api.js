function fetchImage(name, page) {
  return fetch(
    `https://pixabay.com/api/?key=24200424-23477fc3694bee0d0a7f46301&page=${page}&q=${name}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(r => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error(`Please enter a more specific query`));
  });
}

const api = {
  fetchImage,
};

export default api;
