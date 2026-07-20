import React from "react";

function UserPage() {
  return (
    <div>
      <h2>Welcome User</h2>

      <h3>Flight Ticket Booking</h3>

      <table>
        <thead>
          <tr>
            <th>Flight No</th>
            <th>From</th>
            <th>To</th>
            <th>Fare</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Hyderabad</td>
            <td>Delhi</td>
            <td>₹4500</td>
            <td>
              <button className="bookBtn">
                Book Ticket
              </button>
            </td>
          </tr>

          <tr>
            <td>6E220</td>
            <td>Chennai</td>
            <td>Mumbai</td>
            <td>₹5200</td>
            <td>
              <button className="bookBtn">
                Book Ticket
              </button>
            </td>
          </tr>

          <tr>
            <td>UK880</td>
            <td>Bangalore</td>
            <td>Kolkata</td>
            <td>₹4800</td>
            <td>
              <button className="bookBtn">
                Book Ticket
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;