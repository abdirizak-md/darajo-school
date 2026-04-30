import Communication from "./modal.js";
import Student from "../student/modal.js";
import { sendEmail } from "../../common/utils/sendEmail.js";

// CREATE MESSAGE
export const createMessage = async (data) => {
  return await Communication.create(data);
};

// GET MESSAGES
export const getMessages = async () => {
  return await Communication.find().sort({ createdAt: -1 });
};

// SEND MESSAGE LOGIC
export const sendMessageNow = async (id) => {
  const message = await Communication.findById(id);

  if (!message) throw new Error("Message not found");

  let emails = [];

  // ALL PARENTS
  if (message.recipients === "ALL_PARENTS") {
    const students = await Student.find().select("parentEmail");
    emails = students.map((s) => s.parentEmail);
  }

  // CLASS
  if (message.recipients === "CLASS") {
    const students = await Student.find({
      classId: message.targetClass,
    }).select("parentEmail");

    emails = students.map((s) => s.parentEmail);
  }

  // SECTION
  if (message.recipients === "SECTION") {
    const students = await Student.find({
      sectionId: message.targetSection,
    }).select("parentEmail");

    emails = students.map((s) => s.parentEmail);
  }

  // SINGLE PARENT
  if (message.recipients === "SINGLE_PARENT") {
    if (!message.targetEmail) {
      throw new Error("Target email is required");
    }

    emails = [message.targetEmail];
  }

  // REMOVE EMPTY EMAILS
  emails = emails.filter(Boolean);

  // SEND EMAILS
  await Promise.all(
    emails.map((email) =>
      sendEmail({
        to: email,
        subject: message.subject,
        text: message.content,
      })
    )
  );

  // UPDATE STATUS
  message.status = "SENT";
  message.sentAt = new Date();

  await message.save();

  return message;
};