import { useState } from 'react';
import { Button } from 'antd';

function Counter() {
    const [count, setCount] = useState(0);

    return (<div>
        <Button onClick={() => setCount(count + 1)}>{count}</Button>
    </div>)
}

export default Counter;