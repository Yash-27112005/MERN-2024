import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const AdminContact = () => {
  const [adminContact, setContacts] = useState([]);
  const { authorizationToken } = useAuth();

  // Fetch all Contacts data from the API
  const getAllContactData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); //! for admin users data on console
        setContacts(data.contact);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // ! delete the user on btn
  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log("Users after delete", data);
      if (response.ok) {
        getAllContactData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Call getAllUsersData when the component mounts
  useEffect(() => {
    getAllContactData();
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Contacts Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message </th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {adminContact.map((curContact, index) => {
                return (
                  <tr key={index}>
                    <td>{curContact.username}</td>
                    <td>{curContact.email}</td>
                    <td>{curContact.message}</td>

                    <td>
                      <button onClick={() => deleteContact(curContact._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
