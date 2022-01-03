import { useState, useEffect } from "react";
import "./css/form.css";
export const Form = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ title: "", ingredients: "", time: "" });
  const getData = () => {
    fetch(" http://localhost:3001/users")
      .then((d) => d.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    getData();
  }, []);
  const handlesubmit = async (e) => {
    e.preventDefault();

    let res = await fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "content-type": "application/json" },
    });
    getData();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <>
      <div className="form">
        <form method="POST" onSubmit={handlesubmit}>
          <div>
            <label> Title &nbsp;:&nbsp;</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="Enter Title"
            />
          </div>
          <div>
            <label>Ingredients&nbsp;:&nbsp;</label>
            <input
              type="text"
              name="ingredients"
              onChange={handleChange}
              placeholder="Enter Ingredients"
            />
          </div>
          <div>
            <label>Time&nbsp;:&nbsp;</label>
            <input
              type="text"
              name="time"
              onChange={handleChange}
              placeholder="Enter Time"
            />
          </div>

          <div>
            <input type="submit" id="submit-btn" />
          </div>
        </form>
      </div>
      <div>
        {data.map((el) => (
          <>
            <h2>{el.title}</h2>
            <p>{el.ingredients}</p>
            <p>{el.time}</p>
          </>
        ))}
      </div>
    </>
  );
};
