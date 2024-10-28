const baseUrl = 'https://671f7361e7a5792f052e4dbe.mockapi.io/api/v1/:endpoint/tasks';

const mapTasks = tasks => tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id}));

export const getTasksList = () => {
    return fetch(baseUrl)
    .then(response => response.json())
    .then(tasks => mapTasks(tasks))
};

export const createTasks = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    })
};

export const updateTask = (taskId, updatedTaskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json;charset=utf-8'
        },
        body: JSON.stringify(updatedTaskData)
    })
}