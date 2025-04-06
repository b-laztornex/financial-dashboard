import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Settings: React.FC = () => {
  const { user, setUser } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState<
    "EditProfile" | "Preference" | "Security"
  >("EditProfile");

  const [formData, setFormData] = useState({
    name: user.name,
    username: user.username,
    email: user.email,
    password: user.password,
    dateOfBirth: user.dateOfBirth,
    presentAddress: user.presentAddress,
    permanentAddress: user.permanentAddress,
    city: user.city,
    postalCode: user.postalCode,
    country: user.country,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUser((prev) => ({ ...prev, ...formData }));
    alert("Profile updated");
  };

  return (
    <div className="bg-white rounded p-4">
      <div className="flex gap-4 border-b pb-2 mb-4">
        <button
          onClick={() => setActiveTab("EditProfile")}
          className={activeTab === "EditProfile" ? "font-bold" : ""}
        >
          Edit Profile
        </button>
        <button
          onClick={() => setActiveTab("Preference")}
          className={activeTab === "Preference" ? "font-bold" : ""}
        >
          Preference
        </button>
        <button
          onClick={() => setActiveTab("Security")}
          className={activeTab === "Security" ? "font-bold" : ""}
        >
          Security
        </button>
      </div>

      {activeTab === "EditProfile" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label>Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label>Username</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label>Date of Birth</label>
            <input
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label>Present Address</label>
            <input
              name="presentAddress"
              value={formData.presentAddress}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label>Permanent Address</label>
            <input
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label>City</label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label>Postal Code</label>
            <input
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label>Country</label>
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {activeTab === "Preference" && <div>Preference settings go here.</div>}

      {activeTab === "Security" && <div>Security settings go here.</div>}
    </div>
  );
};

export default Settings;
