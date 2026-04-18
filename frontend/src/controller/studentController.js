import Student from "../models/Student.js";
// CREATE STUDENT
// export const addStudent = async (req, res) => {
//   try {
//     const student = await Student.create(req.body);

//     res.status(201).json({
//       success: true,
//       message: "Student created successfully",
//       data: student
//     });

//   } catch (error) {
//     if (error.code === 11000) {
//       return res.status(400).json({
//         success: false,
//         message: "Student ID already exists"
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// simplified version for testing 
export const addStudent = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    
    console.log('email', email);
    console.log('password', password);
    console.log('firstname', firstName);
    console.log('lastname', lastName);
    
    const student = await Student.create({
      email, password, firstName, lastName
    });

    res.status(201).json({
      success: true, message: "Student created successfully", data: student
    });
        

  } catch (error) {
    console.log('error at creating student', error);
    res.send("Error at creating student");
    // res.status(500).json({ success: false, message: "something went wrong" });
  }
}  