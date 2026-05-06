<<<<<<< HEAD
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
=======
import React, { useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { IoSend } from 'react-icons/io5'

import { useCreateMessageMutation, useSendMessageMutation } from '../redux/features/communication'
import { useGetClassesQuery } from '../redux/features/classApi'
import { useGetSectionsQuery } from '../redux/features/sectionApi'
>>>>>>> 75dba11 (get update)

const CommunicationsPage = () => {
  const [active, setActive] = useState('message')

const [createMessage] = useCreateMessageMutation()
const [sendMessage, { isLoading }] = useSendMessageMutation()
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
  })

<<<<<<< HEAD
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
=======
  // ✅ Fetch classes & sections
  const { data: classesData } = useGetClassesQuery()
  const { data: sectionsData } = useGetSectionsQuery(formData.targetClass, {
    skip: !formData.targetClass,
  })

>>>>>>> 75dba11 (get update)
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,

<<<<<<< HEAD
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
=======
      // reset section when class changes
      ...(name === "targetClass" && { targetSection: "" }),
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
const payload = {
  messageType: formData.messageType,
  priority: formData.priority,
  recipients: formData.recipients,
  subject: formData.subject,
  content: formData.content,
  scheduledAt: formData.scheduledAt,
}

// ✅ CLASS CASE
if (formData.recipients === "CLASS") {
  payload.targetClass = String(formData.targetClass)
  payload.targetSection = formData.targetSection
    ? String(formData.targetSection)
    : null
}

// ✅ CUSTOM EMAIL
if (formData.recipients === "CUSTOM") {
  payload.targetEmail = formData.targetEmail
}
console.log("PAYLOAD:", payload)
console.log("TYPE:", typeof payload.targetClass)
    try {
      console.log(payload) // debug
      await createMessage(payload).unwrap()

      alert("Message sent successfully")
>>>>>>> 75dba11 (get update)

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
<<<<<<< HEAD
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
=======
      })
    } catch (error) {
      console.log(error)
      alert("Failed to send message")
    }
  }

  return (
    <section className='max-w-400 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>

      {/* Back Button */}
      <Link
        to='/'
        className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-orange-500 mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95"
      >
        <MdArrowBackIos className='text-white' size={24} />
        <span className='text-white font-medium'>Back to Dashboard</span>
      </Link>

      {/* Header */}
      <div className="bg-linear-0 to-white from-[#f8f9fa] rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
        <h1 className='text-orange-500 text-3xl font-bold mb-4'>🔊 Communications</h1>
        <span className='text-[#666]'>
          Send Emails and Manage all communication activities within the school
        </span>
>>>>>>> 75dba11 (get update)
      </div>

      {/* Tabs */}
      <div className="flex gap-5 mb-8">
        <button
          onClick={() => setActive('message')}
          className={`px-8 py-3 border border-[#e1e5e9] hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active === 'message' ? 'bg-orange-500 text-white' : 'bg-white'}`}
        >
          Message
        </button>

<<<<<<< HEAD
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
=======
        <button
          onClick={() => setActive('messageHistory')}
          className={`px-8 py-3 border border-[#e1e5e9] hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active === 'messageHistory' ? 'bg-orange-500 text-white' : 'bg-white'}`}
        >
          Message History
        </button>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] max-w-300 mx-auto">

        <div className="flex items-center justify-between p-6 border-b border-gray-400">
          <h1 className="text-2xl text-orange-500 font-bold">Send New Message</h1>
        </div>

        <form className="p-6" onSubmit={handleSubmit}>

          <div className="grid grid-cols-2 gap-5">

            {/* Message Type */}
            <div className="mb-4">
              <label className="font-medium block mb-2 text-[#333]">Message Type *</label>
              <select
                name="messageType"
                value={formData.messageType}
                onChange={handleChange}
                className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm"
                required
              >
                <option value="">Select Type</option>
                <option value="General Notice">General Notice</option>
                <option value="Attendance Alert">Attendance Alert</option>
                <option value="Fee Reminder">Fee Reminder</option>
                <option value="Event Announcement">Event Announcement</option>
                <option value="Emergency Alert">Emergency Alert</option>
                <option value="Custom Message">Custom Message</option>
              </select>
            </div>

            {/* Priority */}
            <div className="mb-4">
              <label className="font-medium block mb-2 text-[#333]">Priority *</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm"
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
>>>>>>> 75dba11 (get update)

          </div>

          {/* Recipients */}
          <div className="mb-4">
            <label className="font-medium block mb-2 text-[#333]">Recipients *</label>
            <select
              name="recipients"
              value={formData.recipients}
              onChange={handleChange}
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm"
              required
            >
              <option value="">Select Recipients</option>
              <option value="ALL_PARENTS">All Parents</option>
              <option value="ALL_STAFF">All Staff</option>
              <option value="CLASS">By Class</option>
              <option value="CUSTOM">Custom Email</option>
            </select>
          </div>

          {/* Class */}
          {formData.recipients === "CLASS" && (
            <div className="mb-4">
              <label className="font-medium block mb-2 text-[#333]">Class</label>
              <select
                name="targetClass"
                value={formData.targetClass}
                onChange={handleChange}
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

          {/* Section */}
          {formData.recipients === "CLASS" && formData.targetClass && (
            <div className="mb-4">
              <label className="font-medium block mb-2 text-[#333]">Section</label>
              <select
                name="targetSection"
                value={formData.targetSection}
                onChange={handleChange}
                className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm"
              >
                <option value="">All Sections</option>
                {sectionsData?.data?.map((sec) => (
                  <option key={sec._id} value={sec._id}>
                    {sec.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Custom Email */}
          {formData.recipients === "CUSTOM" && (
            <div className="mb-4">
              <label className="font-medium block mb-2 text-[#333]">Email</label>
              <input
                type="email"
                name="targetEmail"
                value={formData.targetEmail}
                onChange={handleChange}
                className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm"
                placeholder="Enter email"
                required
              />
            </div>
          )}

          {/* Subject */}
          <div className="mb-4">
            <label className="font-medium block mb-2 text-[#333]">Subject *</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm"
              placeholder="Enter subject..."
              required
            />
          </div>

          {/* Content */}
          <div className="mb-4">
            <label className="font-medium block mb-2 text-[#333]">Message *</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="5"
              className="w-full p-2.5 border rounded-md text-sm"
              placeholder="Enter message..."
              required
            />
          </div>

          {/* Schedule */}
          <div className="mb-4">
            <label className="font-medium block mb-2 text-[#333]">Schedule</label>
            <input
              type="date"
              name="scheduledAt"
              value={formData.scheduledAt}
              onChange={handleChange}
              className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm"
            />
          </div>

<<<<<<< HEAD
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
=======
          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center gap-3 bg-orange-500 p-3 rounded-lg text-white hover:opacity-90 transition-all duration-200"
          >
            <IoSend />
            {isLoading ? "Sending..." : "Send Message"}
          </button>

>>>>>>> 75dba11 (get update)
        </form>
      </div>
    </section>
  )
}

<<<<<<< HEAD
export default CommunicationsPage;
=======
export default CommunicationsPage  
>>>>>>> 75dba11 (get update)
