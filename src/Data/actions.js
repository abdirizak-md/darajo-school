import { FaCalendarPlus, FaChalkboard, FaClipboardCheck, FaEnvelope, FaMoneyBill, FaPersonChalkboard, FaUserPlus } from "react-icons/fa6";
import { MdAdd, MdPlusOne } from "react-icons/md";

const actions = [
    {label: 'Add Student', icon: FaUserPlus},
    {label: 'Add Teacher', icon: FaChalkboard},
    {label: 'Create Exam', icon: FaClipboardCheck},
    {label: 'Send Message', icon: FaEnvelope},
    {label: 'Record Payment', icon: FaMoneyBill},
    {label: 'Schedule Event', icon: FaCalendarPlus},
]

export default actions;