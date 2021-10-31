class PostAPI {
    static TOKEN ='2ddde996a3abe7a6a77663ad27d1b87945f3dc38f53bd21e1bf9cacdcd675b19';
    static URL = 'https://gorest.co.in/public/v1/posts';
    static USER_ID = 501;
    static HEADERS = {
      'Accept': 'application/json',
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization': `Bearer ${this.TOKEN}`,
    };
  
    static request(uri, method, data) {
      return fetch(`${this.URL}${uri}`, {
        method,
        headers: this.HEADERS,
        body: data ? JSON.stringify(data) : undefined,
      });
    }  
  
    static getList() {
      return this.request(`?user_id=${this.USER_ID}`, `GET`)
        .then((res) => {
          if(res.ok) {
            return res.json();
          }
  
        throw new Error('Can not fetch publication from API');
        })
        .then((data) => data.data);
    }
  
    static delete(id) {
      return this.request(`/${id}`, `DELETE`)
      .then((res) => {
        if(!res.ok && res.status !== 204) {
          throw new Error('Can not execute delete publication request on API');
        }
      });
    }
  
      static create(note) {
      return this.request(``, `POST`, {user_id: this.USER_ID, "title": note.title,
      "body": note.body })
        .then((res) => {
          if(res.ok) {
            return res.json();
          }
  
        return res.json().then((data) => {
          throw new Error('Can not execute create publication request on API \n' + JSON.stringify(data.data, null, 4));
        })
      });
    }
  
    static update(note) {
      
      return this.request('/'+note.Id, `PUT`, {"title": note.title,
      "body": note.body })
      
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
  
      throw new Error('Can not execute update publication request on API');
      })
    }
  }