import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  //  const navigate = useNavigate();
  const params = useParams();
  console.log("params", params);
  const { authorizationToken } = useAuth();
  //   get single user data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log("Users single data", data);
      setData(data);
      //   if (response.ok) {
      //     getSingleUserData();
      //   }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };
  //! to  update the data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
        if (response.ok) {
          
          toast.success("Updated Successful");
          // navigate("/admin/users");
        }else{
          toast.error("Not Updated");
        }

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="section-contact">
        {/* contact form content actual  */}
        <div className="contact-content container">
          <h1 className="main-heading">Update User Data</h1>
        </div>
        <section className="section-form">
          <form onClick={handleSubmit}>
            <div>
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                value={data.username}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={data.email}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="phone">Mobile</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                autoComplete="off"
                value={data.phone}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <button type="submit">Update</button>
            </div>
          </form>
        </section>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.26817444539!2d73.72107860073466!3d19.99110534032964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xcb07845d9d28215c!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711057321745!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};
