import http from "../http-request";
const getAll = () => {
    return http.get("/tools");
};
const get = id => {
    return http.get('/tools/${id}');
};
const create = data => {
    return http.post("/tools", data);
};
const update = (id, data) => {
    return http.put('/tools/${id}', data);
};
const remove = id => {
    return http.delete('/tools/${id}');
};

const findByTag = tag => {
    return http.get('/tools?tag=${tag}');
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    findByTag
};