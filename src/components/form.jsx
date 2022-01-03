import React from "react";
import "./css/from.css";
import { useState } from "react";

export const Form = () => {
  const [form, setFrom] = useState({
    title: "",
    ingredients: "",
    time: "",
    image: "",
  });

  const Show = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const Changes = (e) => {
    const { name, value } = e.target;
    setFrom({
      ...form,
      [name]: value,
    });
  };

  return (
    <div id="input-from">
      <form onSubmit={Show}>
        <div>
          <label>Title&nbsp;:&nbsp;</label>
          <input type="text" name="title" onChange={Changes} />
        </div>
        <div>
          <label>Ingredients &nbsp;: &nbsp;</label>
          <input type="text" name="ingredients" onChange={Changes} />
        </div>

        <div>
          <label>Time&nbsp;:&nbsp;</label>
          <input type="text" name="time" onChange={Changes} />
        </div>

        <div>
          <label>Image&nbsp;:&nbsp;</label>
          <input type="text" name="image" onChange={Changes} />
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
