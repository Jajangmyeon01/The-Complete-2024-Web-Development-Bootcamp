import React from "react";
import { ReservationTable } from "../ReservationTable";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

// tae hahaha
export const AddReservation = () => {
  // define formdata
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  // state to hold all reservations
  const [reservations, setReservations] = useState([]);

  // input fields change event handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const submitForm = async () => {
      try {
        // send post request to API
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          formData
        );

        Swal.fire({
          title: "Success",
          text: "Reservation added successfully!",
          icon: "success",
        });

        // empty formdata
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
        });

        const { data } = response;

        // when submitted the form it will add to array
        setReservations((current) => [...current, data]);

        console.log(reservations);
      } catch (error) {
        console.error("Error adding reservation:", error);
        alert("");

        Swal.fire({
          title: "Error",
          text: "Error adding reservation. Please try again.",
          icon: "error",
        });
      }
    };

    submitForm();
  };

  //   get all data on load
  useEffect(() => {
    // fetch reservations from API
    const fetchReservations = async () => {
      try {
        // kung real reservation yung data eto gamitin mo
        // useEffect
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        // setReservations(response.data);
      } catch (error) {
        console.error("Error adding reservation:", error);
        alert("");

        Swal.fire({
          title: "Error",
          text: "Error adding reservation. Please try again.",
          icon: "error",
        });
      }
    };

    fetchReservations();
  }, [reservations.length]);

  return (
    <>
      <form
        className="modal fade"
        id="addReservation"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        onSubmit={handleSubmit}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addReservationLabel">
                Add reservation
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <div className="w-full">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    onChange={handleChange}
                    value={formData.name}
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    onChange={handleChange}
                    value={formData.email}
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    onChange={handleChange}
                    value={formData.phone}
                    type="tel"
                    className="form-control"
                    name="phone"
                    id="phone"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Date:</label>
                  <input
                    onChange={handleChange}
                    value={formData.date}
                    type="date"
                    className="form-control"
                    name="date"
                    id="date"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Add reservation
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* Display all reservations */}
      <ReservationTable reservations={reservations} />
    </>
  );
};
