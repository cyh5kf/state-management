import React from 'react';
import { useModel } from 'umi';

const Home = () => {
    const { count } = useModel('count');

    return (
        <div>
            <div>Home</div>
            <div>{count}</div>
        </div>
    )
}

export default Home