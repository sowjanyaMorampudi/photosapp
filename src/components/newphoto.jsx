import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useState } from "react";
const Newphoto = ({ buttonClick }) => {
  const [newData, setNewData] = useState({
    title: "",
    url: "",
    thumbnailUrl: "",
  });
  const { title, url, thumbnailUrl } = newData;
  const [modelClose, setModelClose] = useState(true);

  const changeHandler = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
    // console.log(newData);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    // send POST request
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos", options)
      .then((res) => res.json())
      .then((res) => console.log(res));
    setModelClose(false);
    buttonClick();
  };
  const closemodel = () => {
    setModelClose(false);
    buttonClick();
  };

  const condition = title && url && thumbnailUrl ? false : true;

  return (
    <div>
      <Modal isOpen={modelClose} size="lg">
        <ModalHeader toggle={closemodel}></ModalHeader>
        <ModalBody>
          <form onSubmit={submitHandler} className="formcard">
            <input
              type="text"
              placeholder="title"
              name="title"
              onChange={changeHandler}
            />
            <br />
            <input
              type="text"
              placeholder="url"
              name="url"
              onChange={changeHandler}
            />
            <br />
            <input
              type="text"
              placeholder="thumbnailUrl"
              name="thumbnailUrl"
              onChange={changeHandler}
            />
            <br />
            <input
              type="submit"
              value="save"
              disabled={condition}
              className="savebutton"
            />
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Newphoto;
