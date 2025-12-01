import { useState } from "react";

export default function BookingForm({ defaultTour }) {
  // State to store form fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    tour: defaultTour || "",
    startDate: "",
    people: 1,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Format WhatsApp message
    const message = `
Booking Details:
Name: ${formData.fullName}
Email: ${formData.email}
Tour: ${formData.tour}
Start Date: ${formData.startDate}
People: ${formData.people}
    `;

    // WhatsApp URL (replace COUNTRY_CODE_PHONE_NUMBER with your number, e.g., 94771234567)
    const phoneNumber = "94766249737";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Full name</label>
        <input
          name="fullName"
          className="form-control"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Tour</label>
        <input
          name="tour"
          className="form-control"
          value={formData.tour}
          readOnly
        />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Start date</label>
          <input
            type="date"
            name="startDate"
            className="form-control"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">People</label>
          <input
            type="number"
            name="people"
            className="form-control"
            min="1"
            value={formData.people}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button className="btn btn-primary">Submit Booking</button>
    </form>
  );
}
