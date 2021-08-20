import axios from 'axios';
import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    // const x =
        // await axiosWithAuth().get("/colors")
        // .then(res => {
        //     console.log(res.data)
        //     return res.data
        // })
        // .catch(err => {
        //     console.log(err);
        // });
        // console.log(typeof(x));
        // return (x);
        return axiosWithAuth().get("/colors")
            .then(res => {
                return res.data;
            }).catch((err) => {
                console.log('error caught')
                console.log(err)
            }).finally(() => {
                console.log('finally')
            })
};

export default fetchColorService;