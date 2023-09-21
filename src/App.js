import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./Component/FormInput";
import QA from "./Component/QA";
import { Question } from "./data/data";
import { useState } from "react";
import { json } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [data,  setData] = useState(Question);

  const AddItem = () => {
    localStorage.setItem("items", JSON.stringify([...Question]))
    setData([...Question])
    notify("تم الاضافة بنجاح", "Success")
  }

  const deleteQu = () => {
    localStorage.removeItem("items")
    Question.splice(0, Question.length)
    // السطر الي فوق بيحكي انه يمسحلي من العنصر الاولاني الى اخر عنصر 
    setData([])
    // اللسطر الي فوق بيحكي انه فضيلي الارري كلها 
    notify("تم حذف الكل بنجاح", "Success")

  }


  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]))
    setData([...items])
    notify("تم حذف السوال بنجاح", "Success")
    if (items.length <= 0) {
      deleteQu();
    }
  }

  const notify = (message, type) => {
    if (type === "Error")
      toast.error(message)
    else if (type === "Success")
      toast.success(message)
  };

  return (

    <div className="font color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center  py-2">اسئلة واجوبة شائعة</div>
          </Col>
          <Col sm="8">
            <FormInput OnAdd={AddItem} notify={notify} />
            <QA dataview={data} deleteOneItem={deleteOneItem} />
            {
              localStorage.getItem("items") != null ? (<button onClick={deleteQu} className="btn-color w-100 my-3">مسح الكل</button>) : null
            }
          </Col>

        </Row>
        <ToastContainer />

      </Container>
    </div>
  );
}

export default App;
