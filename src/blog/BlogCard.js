import React, { useState } from 'react';
import '../index.css';


const BlogCard = () => {

    const [count, setCount] = useState(0);

    function incr() {
        setCount(count + 1)
    }
    function decr(){
        setCount(count - 1)
    }

    return (
        <div className='App'>
            <p>{count}</p>
            <button onClick={incr}>Incr</button>
            <button onClick={decr}>Decr</button>


        </div>
    );
};

export default BlogCard;