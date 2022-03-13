import React from "react";

const Book = (props) => {
  const { img, Title, Author } = props;
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("You have an alert");
  };
  const complexExample = (Author) => {
    console.log(Author);
  };
  // console.log(props);
  // attribute, eventHandler
  // Onclick, onMouseOver
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(Title);
      }}
    >
      <img src={img} alt="" />
      <h4 onClick={() => console.log(Title)}>{Title}</h4>
      <h6>{Author}</h6>
      <button type="button" onClick={clickHandler}>
        More...
      </button>
      <button type="button" onClick={() => complexExample(Author)}>
        more Complex Button
      </button>
    </article>
  );
};

export default Book;
