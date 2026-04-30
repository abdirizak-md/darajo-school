import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useCreateParentMutation } from "../redux/features/parentApi";

const AddParentModal = ({ setParentModal }) => {
  const [createParent, { isLoading, isError }] = useCreateParentMutation();

  const [formData, setFormData] = useState({
  fullName: "",
  phone: "",
  password: "",
  gender: "",
  email: "",
  address: "",
  status: "Active",
  emergencyContact: "",
});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createParent(formData).unwrap();

      alert("Parent created successfully");

      // reset form
      setFormData({
        fullName: "",
        phone: "",
        password: "",
        gender: "",
        email: "",
        address: "",
        status: "Active",
        emergencyContact: "",
      });

      setParentModal(false);
    } catch (error) {
      console.log("Create parent error:", error);

      alert(
        error?.data?.message ||
        error?.error ||
        "Failed to create parent"
      );
    }
  };

  return (
    <div className="fixed z-50 left-0 top-0 w-full h-full bg-black/50 flex items-center justify-center">
      <div className="bg-white w-[50%] max-h-[90vh] overflow-y-auto rounded-lg">

        {/* HEADER */}
        <div className="flex justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Add Parent</h2>
          <IoClose size={26} onClick={() => setParentModal(false)} />
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3">

        <input
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full border p-2"
      />

        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-2"
        />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border p-2"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2"
          />

          <input
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2"
          />

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2"
          />

          <input
            name="emergencyContact"
            placeholder="Emergency Contact"
            value={formData.emergencyContact}
            onChange={handleChange}
            className="w-full border p-2"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border p-2"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-600 text-white p-2"
          >
            {isLoading ? "Saving..." : "Create Parent"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddParentModal;