import React from "react";
import { AddReservation } from "./modals/AddReservation";
export const Dashboard = () => {
  return (
    <>
      <div className="d-block">
        <div className="d-flex align-items-center justify-content-end gap-3 p-2">
          <button className="btn btn-primary">Reservation search</button>
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addReservation"
          >
            <i className="fas fa-plus"></i> Make reservation
          </button>
        </div>
      </div>

      {/* modal */}
      <AddReservation />
    </>
  );
};
