class MockAPI {
    static URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/students';
    static HEADERS = {
      'Content-type': 'application/json; charset=UTF-8',
    };
  
    static request(uri = '', method = 'GET', data) {
      return fetch(`${this.URL}${uri}`, {
        method,
        headers: this.HEADERS,
        body: data ? JSON.stringify(data) : undefined,
      })
        .then((res) => res.json());
    }  
  
    static getList() {
      return this.request();
    }

    static getOne(id) {
      return this.request(`/${id}`);
    }

    static create(note) {
      return this.request('', 'POST', {'name':note});
    }

    static update(id, s) {
      return this.request(`/${id}`, 'PUT', {'marks':[s]});
	  getList();
    }

    static delete(id) {
      return this.request(`/${id}`, 'DELETE');
    }
  }
  