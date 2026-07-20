import React from "react";

function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest</h2>

      <h3>Available Flight Details</h3>

      <table>
        <thead>
          <tr>
            <th>Flight No</th>
            <th>From</th>
            <th>To</th>
            <th>Fare</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Hyderabad</td>
            <td>Delhi</td>
            <td>₹4500</td>
          </tr>

          <tr>
            <td>6E220</td>
            <td>Chennai</td>
            <td>Mumbai</td>
            <td>₹5200</td>
          </tr>

          <tr>
            <td>UK880</td>
            <td>Bangalore</td>
            <td>Kolkata</td>
            <td>₹4800</td>
          </tr>
        </tbody>
      </table>

      <p className="note">
        Please Login to Book Tickets.
      </p>
    </div>
  );
}

export default GuestPage;