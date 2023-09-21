import { Accordion, Button, Row } from "react-bootstrap";
import { Question } from "../data/data";

const QA = ({ dataview, deleteOneItem }) => {
    const dataLocal = JSON.parse(localStorage.getItem("items"))
    // 
    const onDeleteItem = (ID) => {
        if (localStorage.getItem("items") != null) {
            const index = Question.findIndex((item) => item.id === ID);
            // findIndex هاد معناه هاتلي رقم الاندكس الي انا واقف عليه هلقيت 
            Question.splice(index, 1)
            // السطر الي فوق انه بيحكي بس امسح الاي دي هاد هو بس 
            deleteOneItem(Question)
            //deleteOneItem(Question) بببعتها ك باراميتر 
        }


    }
    return (
        <>
            <Row>
                <Accordion>
                    {
                        localStorage.getItem("items") != null ? (dataLocal.map((item, index) => {
                            return (<Accordion.Item key={index} eventKey={item.id}><Accordion.Header>
                                <div className="m-auto">{item.q}</div>
                            </Accordion.Header>
                                <Accordion.Body >
                                    <div className="px-3 d-inline " >{item.a} </div>
                                    <button onClick={() => onDeleteItem(item.id)} className="btn-color">مسح السؤال </button>
                                </Accordion.Body>
                            </Accordion.Item>
                            )

                        })) : <h2 className="fs-4 text-center">لا توجد اسئلة</h2>
                    }


                </Accordion>
            </Row >
        </>
    )
}
export default QA;