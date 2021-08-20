import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    axiosWithAuth().get("/colors")
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err);
        });
};

export default fetchColorService;