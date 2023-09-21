import React, { useState } from 'react'
import { Row, Form, Col } from 'react-bootstrap';
import { Question } from '../data/data';
import { v4 as uuidv4 } from 'uuid';

const FormInput = ({ OnAdd, notify }) => {
    const [qu, setQu] = useState('');
    const [qa, setQa] = useState('');

    const addnewItem = () => {
        if (qu === "" || qa === "") {
            notify("من فضلك اكمل البيانات", "Error");
            return;
        }
        const newItem = { id: uuidv4(), q: qu, a: qa };
        Question.push(newItem);
        setQu('');
        setQa('');
        OnAdd();
    }
    return (
        <Row className="my-3">

            <Col sm="5">
                <Form.Control type="text" value={qu} onChange={(e) => setQu(e.target.value)} placeholder="ادخل السوال" />
            </Col>

            <Col sm="5">
                <Form.Control type="text" value={qa} onChange={(e) => setQa(e.target.value)} placeholder="ادخل الاجابه" />
            </Col>

            <Col sm="2">
                <button onClick={addnewItem} className="btn-color w-100" type="submit">
                    اضافة
                </button>
            </Col>

        </Row>
    )
}

export default FormInput