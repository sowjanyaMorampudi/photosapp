import React, { useState, useEffect } from "react";
import {
  CardGroup,
  //   PaginationItem,
  //   PaginationLink,
  //   Pagination,
  Spinner,
  Button,
} from "reactstrap";
import Photo from "./photo";
import Image from "./imagePreview";
import Newphoto from "./newphoto";
import { useParams } from "react-router";

const Photos = () => {
  const [data, setData] = useState([]);
  // const [perpage, setPerpage] = useState(1);
  const [load, setLoad] = useState(true);
  const [modelDetail, setModelDetail] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [newButton, setNewButton] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoad(true);
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then((response) => response.json())
      .then((json) => {
        setLoad(false);
        setData(json);
      });
  }, [id]);

  const modeOn = (data) => {
    setModelDetail(true);
    setImageData(data);
  };

  const previewClose = () => {
    setModelDetail(false);
    setImageData(null);
  };
  const buttonClick = () => {
    setNewButton(!newButton);
  };

  return (
    <div>
      <center>
        <div>
          <Button onClick={buttonClick} color="success" className="mt-2">
            New Photo
          </Button>
        </div>
      </center>
      {newButton && <Newphoto buttonClick={buttonClick} />}
      {modelDetail && <Image data={imageData} previewClose={previewClose} />}
      <CardGroup>
        {!load ? (
          data.map((item) => (
            <Photo key={item.id} item={item} modeOn={modeOn} />
          ))
        ) : (
          <Spinner>Loading.....</Spinner>
        )}
      </CardGroup>

      {/* <Pagination aria-label="Page navigation example" size="sm">
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" previous />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              setPerpage(1);
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              setPerpage(2);
            }}
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              setPerpage(3);
            }}
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" next />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" last />
        </PaginationItem>
      </Pagination> */}
    </div>
  );
};
export default Photos;
