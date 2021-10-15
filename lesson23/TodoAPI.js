class TodoAPI {
    static URL = 'https://gorest.co.in/public/v1/todos';
    static TOKEN ='2ddde996a3abe7a6a77663ad27d1b87945f3dc38f53bd21e1bf9cacdcd675b19';
    static HEADERS = {
        'Accept': 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${this.TOKEN}`,
      };

    static getList() {
        return fetch(this.URL)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error('Can not fech todolist from API');
        })
        
        .then((data) => data.data);
    }

    static delete(id) {
        return fetch(`${this.URL}/${id}`, {
            method: 'DELETE',
            headers: this.HEADERS,
        })
        .then((res) => {
            if (!res.ok || res.status !== 204) {
                throw new Error('Can not execute delete todo request on API');
            }
        });
    }
}