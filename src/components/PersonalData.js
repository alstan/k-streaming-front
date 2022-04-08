import { useState } from 'react';
import { Input, Row, Col } from 'antd';

function PersonalData() {
    const [name, setName] = useState();
    const [age, setAge] = useState();

    return (<div>
        {age}
        <Row gutter={16}>
            <Col span={6}>
                <label>Name:</label>
                <Input onKeyUp={(event) => setName(event.target.value)} />
            </Col>
            <Col span={18}>
                <label>Age:</label>
                <Input onKeyUp={(event) => setAge(event.target.value)} />
            </Col>
        </Row>
        Result:
        <div>
            Name: {name}
        </div>
    </div>)
}

export default PersonalData;