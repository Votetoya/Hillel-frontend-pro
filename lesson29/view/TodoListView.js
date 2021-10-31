class TodoListView {
    static EDIT_BTN_SELECTOR = '.edit-btn';
    static DELETE_BTN_SELECTOR = '.delete-btn';
    static TODO_ITEM_SELECTOR = '.todo-item';
    static DONE_CLASS = 'done';
    static COMPLETED ='completed';

    #$list = null;
    #options = {};TODO_ITEM_SELECTOR

    constructor(options) {
        this.#options = options; 
        this.#$list = this.initView();
    }

    initView() {
        return $('<ul></ul>')
            .on('click', TodoListView.EDIT_BTN_SELECTOR, this.onEditBtnClick.bind(this))
            .on('click', TodoListView.DELETE_BTN_SELECTOR, this.onDeleteBtnClick.bind(this))
            .on('click', TodoListView.TODO_ITEM_SELECTOR, this.onItemClick.bind(this));
    }

    appendTo($container) {
        $container.append(this.#$list);
    }

    onEditBtnClick(e) {
        e.stopPropagation();

        const id = this.getElementId(e.target);

        this.#options.onEdit(id);
    }

    onDeleteBtnClick(e) {
        e.stopPropagation();

        const id = this.getElementId(e.target);

        this.#options.onDelete(id);
    }

    onItemClick(e) {
        const id = this.getElementId(e.target);

        this.#options.onToggle(id);
    }

    getElementId(el) {
        const id = el.closest(TodoListView.TODO_ITEM_SELECTOR)?.dataset?.id;

        return id ? +id : NaN;
    }

    renderList(list) {
        const html = list.map(todo => this.generateTodoHTML(todo)).join('');

        this.#$list.html(html);
    }

    generateTodoHTML(todo) {
        const completed = todo.status === TodoListView.COMPLETED
            ? TodoListView.DONE_CLASS
            : '';

        return `
        <li data-id="${todo.id}" class="todo-item ${completed}">
            ${todo.title}
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </li>
        `;
    }

    addElement(todo) {
        const todoHtml = this.generateTodoHTML(todo);

        this.#$list.append(todoHtml);
    }

    removeElement(id) {
        this.#$list.find(`[data-id="${id}"]`).remove();
    }

    updateElement(todo, isNew = false) {
        const id = isNew ? '' : todo.id;
        const todoHtml = this.generateTodoHTML(todo);

        this.#$list.find(`[data-id="${id}"]`).replaceWith(todoHtml);
    }
}