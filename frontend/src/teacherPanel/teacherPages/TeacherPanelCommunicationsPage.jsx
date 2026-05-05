import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import { useGetClassesQuery } from "../redux/features/classApi";
import { useGetSectionsQuery } from "../redux/features/sectionApi";
import {
  useSendMessageMutation,
  useCreateMessageMutation,
} from "../redux/features/communication";

const CommunicationsPage = () => {
  const [active, setActive] = useState("message");

  const [formData, setFormData] = useState({
    messageType: "",
    priority: "",
    recipients: "",
    subject: "",
    content: "",
    scheduledAt: "",
    targetClass: "",
    targetSection: "",
    targetEmail: "",
  });

  // API hooks
  const { data: classesData } = useGetClassesQuery();
  const { data: sectionsData } = useGetSectionsQuery(formData.targetClass, {
    skip: !formData.targetClass,
  });

  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const [createMessage, { isLoading: isCreating }] = useCreateMessageMutation();
  // console.log("createMessage loading:", isCreating); // debug
  // console.log("sendMessage loading:", isLoading); // debug

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "targetClass") {
      setFormData({
        ...formData,
        targetClass: value,
        targetSection: "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createMessage(formData).unwrap();
      console.log("CREATE RESPONSE:", res);

      const messageId = res?._id || res?.data?._id || res?.data?.data?._id;

      if (!messageId) {
        console.log("FULL RESPONSE:", res);
        throw new Error("Message ID not found");
      }

      await sendMessage(messageId).unwrap();

      alert("Message sent successfully");

      setFormData({
        messageType: "",
        priority: "",
        recipients: "",
        subject: "",
        content: "",
        scheduledAt: "",
        targetClass: "",
        targetSection: "",
        targetEmail: "",
      });
    } catch (error) {
      console.error(error);
      alert(error?.data?.message || error.message || "Failed to send message");
    }
  };

  return (
    <section className="max-w-400 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto">
      {/* BACK */}
      <Link
        to="/"
        className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-orange-500 mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95"
      >
        <MdArrowBackIos className="text-white" size={24} />
        <span className="text-white font-medium">Back to Dashboard</span>
      </Link>

      {/* HEADER */}
      <div className="bg-white p-6 rounded-md shadow mb-6">
        <h1 className="text-2xl font-bold text-orange-500">
          🔊 Communications
        </h1>
        <p className="text-gray-600">Send Emails and Manage communication</p>
      </div>

      {/* FORM */}
      <div className="bg-white p-6 rounded-md shadow">
        <h2 className="text-xl font-bold text-orange-500 mb-4">
          Send New Message
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <select
              name="messageType"
              value={formData.messageType}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            >
              <option value="">Select Type</option>
              <option value="GENERAL">General</option>
              <option value="ATTENDANCE">Attendance</option>
              <option value="FEE">Fee</option>
              <option value="EVENT">Event</option>
            </select>

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            >
              <option value="">Priority</option>
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
            </select>
          </div>

          <div className="mt-4">
            <select
              name="recipients"
              value={formData.recipients}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Select Recipients</option>
              <option value="ALL_PARENTS">All Parents</option>
              <option value="CLASS">Class</option>
              <option value="SECTION">Section</option>
              <option value="SINGLE_PARENT">Single Parent</option>
            </select>
          </div>

          {(formData.recipients === "CLASS" ||
            formData.recipients === "SECTION") && (
            <div className="mt-4">
              <select
                name="targetClass"
                value={formData.targetClass}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              >
                <option value="">Select Class</option>
                {classesData?.data?.map((cls) => (
                  <option key={cls._id} value={cls._id}>
                    {cls.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {formData.recipients === "SECTION" && (
            <div className="mt-4">
              <select
                name="targetSection"
                value={formData.targetSection}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              >
                <option value="">Select Section</option>
                {sectionsData?.data?.map((sec) => (
                  <option key={sec._id} value={sec._id}>
                    {sec.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {formData.recipients === "SINGLE_PARENT" && (
            <div className="mt-4">
              <input
                type="email"
                name="targetEmail"
                value={formData.targetEmail}
                onChange={handleChange}
                placeholder="Enter parent email"
                required
                className="w-full p-2 border rounded"
              />
            </div>
          )}

          <div className="mt-4">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mt-4">
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Message content"
              rows="4"
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mt-4">
            <input
              type="date"
              name="scheduledAt"
              value={formData.scheduledAt}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              disabled={isLoading || isCreating}
              className="bg-orange-500 text-white px-5 py-2 rounded flex items-center gap-2"
            >
              <IoSend />
              {isLoading || isCreating ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CommunicationsPage;
