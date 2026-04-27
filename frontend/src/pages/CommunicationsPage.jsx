import React, { useState } from 'react'
import { FaEnvelope, FaPlus } from 'react-icons/fa6'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Send } from "lucide-react";
import {IoClose, IoSend} from 'react-icons/io5'

const CommunicationsPage = () => {
    const [active, setActive] = useState('message')
    const [showFilter, setShowFilter] = useState(false)
    const [allAttendance, setAllAttendance] = useState(false)


    const [addSection, setAddSection] = useState(false)
    const [sectionName, setSectionName] = useState(false)
    const [Classs, SetClasss] = useState(false)
  return (
    <section className='max-w-400 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>

        {/* Back Button */}
        <Link 
            to='/' 
            className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-orange-500 mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95"
        >
            <MdArrowBackIos className='text-white' size={24}/>
            <span className='text-white font-medium'>Back to Dashboard</span>
        </Link>

        {/* Header */}
        <div className="bg-linear-0 to-white from-[#f8f9fa] rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
            <h1 className='text-orange-500 text-3xl font-bold mb-4'>🔊 Communications</h1>
            <span className='text-[#666]'>
                Send Emails and Manage all communication activities within the school
            </span>
        </div>


            {/* Tabs */}
        <div className="flex gap-5 mb-8">
        <button
          onClick={() => setActive('message')}
          className={`px-8 py-3 border border-[#e1e5e9] hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${
            active === 'message' ? 'bg-orange-500 text-white' : 'bg-white'
          }`}
        >
          Message
        </button>

        <button
          onClick={() => setActive('messageHistory')}
          className={`px-8 py-3 border border-[#e1e5e9] hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${
            active === 'messageHistory' ? 'bg-orange-500 text-white' : 'bg-white'
          }`}
        >
          Message History
        </button>
      </div>
        
        <div className="bg-white rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] max-w-300 mx-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-400">
                <h1 className="text-2xl text-orange-500 font-bold">Send New Message</h1>
                <button className='flex items-center gap-4 bg-orange-500 p-2 rounded-lg text-white'>
                <IoSend className='font-bold cursor-pointer hover:text-[#ce1126] transition-all duration-200'/> Send Message
                </button>
            </div>
            <form className="p-6" >
                <div className="grid grid-cols-2 gap-5">
                    <div className="mb-4">
                        <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Message Type *</label>
                        <select name="messageType" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" required>
                        <option value="">General Notice</option>
                        <option value="">Attendance Alert</option>
                        <option value="">Fee Reminder</option>
                        <option value="">Event Announcement</option>
                        <option value="">Emergency Alert</option>
                        <option value="">Custom Message</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Priority *</label>
                        <select name="priority" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" required>
                        <option value="">Select Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        </select>
                    </div>
                </div>


                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Recipients *</label>
                    <select name="recipients" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" required>
                    <option value="">All parents</option>
                    <option value="">All staff</option>
                    <option value="">Class one parents</option>
                    <option value="">Class two parents</option>
                    <option value="">Class three parents</option>
                    <option value="">Class four parents</option>
                    <option value="">Class five parents</option>
                    <option value="" >Custom Message</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Subject (Email) *</label>
                    <input type="text" placeholder='Enter subject line..' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="textarea" className="font-medium block mb-2 text-[#333]">Message Content *</label>
                    <textarea name="text" id="textarea" cols="30" rows="5" placeholder='Enter message content..' className="w-full p-2.5 border rounded-md text-sm transition-all duration-300 ease-in-out" ></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Schedule *</label>
                    <input type="date" placeholder='Enter subject line..' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default CommunicationsPage