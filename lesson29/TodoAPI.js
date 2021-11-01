class TodoAPI {
    static URL = 'https://gorest.co.in/public/v1/todos';
    static TOKEN ='2ddde996a3abe7a6a77663ad27d1b87945f3dc38f53bd21e1bf9cacdcd675b19';
    static USER_ID = 518;
    static HEADERS = {
        'Accept': 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${this.TOKEN}`,
      };

    static getList() {
        return fetch(`${this.URL}?user_id=${this.USER_ID}`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error('Can not fech todolist from API');
        })     
        .then((data) => data.data);
    }

    static getOne(id) {
        return fetch(`${this.URL}/${id}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not fetch todo from API')
            })
            .then((data) => data.data);
    }

    static create(todoData) {
        return fetch(`${this.URL}`, {
            method: 'POST',
            headers: this.HEADERS,
            body: JSON.stringify({
                ...todoData,
                user_id: this.USER_ID,
            }),
        })
            .then((res) =>  {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not execute create todo request on API')
            });
    }

    static update(id, todoData) {
        return fetch(`${this.URL}/${id}`, {
            method: 'PUT',
            headers: this.HEADERS,
            body: JSON.stringify(todoData),
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error('Can not execute update todo request on API');
        });
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