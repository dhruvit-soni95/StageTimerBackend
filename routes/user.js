const express = require('express');
const connection = require('../connection');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');
const multer = require('multer');

const app = express();
const fs = require("fs");

const upload = multer({ storage: multer.memoryStorage() });
const axios = require('axios');





// Client side Authentication
router.post('/signup', (req, res) => {
	// console.log("Hello")
	// console.log(req.body);
	let user = req.body;
	query = "select userEmail,userPassword from users where userEmail=?"
	connection.query(query, [user.user_email], (err, results) => {
		if (!err) {
			if (results.length <= 0) {
				query = "insert into users(userName,userEmail,userPassword) values(?,?,?)";
				connection.query(query, [user.user_name, user.user_email, user.user_password], (err, results) => {
					if (!err) {

						// const OTP = otpGenerator.generate(4, {
						//     digits: true, alphabets: false, upperCase: false, specialChars: false
						// });
						// console.log("Verification Code is "+OTP);


						// var transporter = nodemailer.createTransport({
						//   service: 'gmail',
						//   auth: {
						//     user: 'paramsolutionsotp@gmail.com',
						//     pass: 'lmukdngstebmywzd'
						//   }
						// });

						// var mailOptions = {
						//   from: 'paramsolutionsotp@gmail.com',
						//   to: user.email,
						//   subject: 'ParamSolutions.inc',
						//   text: `Hello from ParamSolutions.inc Thanks to connect with our Team. Your OTP is `+OTP+`. This OTP will not used after 5 Minutes so Please Hurry up to Signin we will catch you there...`
						// };


						// transporter.sendMail(mailOptions, function(error, info){
						//   if (error) {
						//     console.log(error);
						//   } else {
						//     console.log('Email sent: ' + info.response);
						//   }
						// });



						// otpquery = "update advisor_user set otp="+OTP+" where email=?";
						// connection.query(otpquery,[user.email],(error,result)=>{
						// 	if(!error){
						// 		console.log("OTP saved Succesfully");
						// 	}else{
						// 		console.log("OTP not Saved");
						// 	}
						// });
						// console.log(user.email);


						const response = { email: user.email }
						const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, { expiresIn: '7d' })
						return res.status(200).json({ token: accessToken });
						// return res.status(200).json({message:"Succesfully Registered"});
					} else {
						return res.status(500).json(err);
					}
				});
			} else {
				return res.status(400).json({ message: "Email Already Exist" });
			}
		} else {
			return res.status(500).json(err, { server: "server down" });
		}
	});
});



router.post('/login', (req, res) => {
	// console.log("hello");
	const user = req.body;
	query = "select userEmail,userPassword from users where userEmail=?";
	connection.query(query, [user.user_email], (err, results) => {
		if (!err) {
			if (results.length <= 0 || results[0].userPassword != user.user_password) {
				return res.status(401).json({ message: "Incorrect Username or Password" });
			} else if (results[0].userPassword === user.user_password) {
				console.log(user.user_email);
				const response = { email: results[0].userEmail }
				const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, { expiresIn: '7d' })
				res.status(200).json({ token: accessToken });
			} else {
				return res.status(400).json({ message: "Something went Wrong" });
			}
		} else {
			return res.status(500).json(err, { server: "server down" });
		}
	});

});



router.post('/sendmail', (req, res) => {
	const user = req.body;
	console.log(user);
	query = "select userEmail,id from users where userEmail=?";
	connection.query(query, [user.user_email], (err, results) => {
		if (!err) {
			console.log("1")
			if (results.length <= 0) {
				console.log("2")
				return res.status(401).json({ err: "Incorrect Email" });
			} else if (results[0].userEmail === user.user_email) {
				console.log("3")
				var transporter = nodemailer.createTransport({
					service: 'gmail',
					auth: {
						user: 'paramsolutionsotp@gmail.com',
						pass: 'lmukdngstebmywzd'
					}
				});
				var mailOptions = {
					from: 'paramsolutionsotp@gmail.com',
					to: user.user_email,
					subject: 'ParamSolutions.inc',
					text: `Reset Password Go to this Link : http://127.0.0.1:4200/resetpassword/` + results[0].id + ``
				};
				transporter.sendMail(mailOptions, function (error, info) {
					if (error) {
						console.log(error);
					} else {
						console.log('Email sent: ' + info.response);
					}
				});
				res.status(200).json({ message: "Successfully Loged In" });
			} else {
				return res.status(400).json({ err: "Incorrect Email" });
			}
		} else {
			return res.status(500).json({ err: "Server has Down" });
		}
	});
});



router.post('/newresetpassword', (req, res) => {
	const user = req.body;
	// console.log("new password");
	// console.log(user.id);
	query = "select userEmail,id from users where id=?";
	connection.query(query, [user.id], (err, results) => {
		if (!err) {
			if (results.length <= 0) {
				return res.status(401).json({ message: "Incorrect Username" });
			} else if (results[0].id = user.id) {
				query = "update users set userPassword=? where id=?";
				connection.query(query, [user.pass, user.id], (err, results) => {
					return res.status(200).json({ message: "Succesfully Update" });
				});
			} else {
				return res.status(400).json(err);
			}
		} else {
			return res.status(500).json(err);
		}
	});
});


router.post('/shareLink', (req, res) => {
	const user = req.body;
	// console.log("Timer");
	query = "select uid,timer from Sharetimer where uid=?";
	connection.query(query, [user.selectTimer.timerselected[user.index].uuid], (err, resultss) => {

		// Serialize the array
		const serializedArray = JSON.stringify(user.timers);
		if (!err) {
			if (resultss.length <= 0) {
				// console.log("first time")

				query = "insert into Sharetimer(uid,startstimerTime,viewer,controller,agenda,moderator,timer,timerColor,message,msgColor,msgBold,msgUppercase,msgBlinking,alltimer) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
				connection.query(query, [user.selectTimer.timerselected[user.index].uuid, user.startsTime, user.viewer, user.controller, user.agenda, user.moderator, user.timer, user.timercolor, user.message, user.msgcolor, user.msgbold, user.msguppercase, user.msgblink, serializedArray], (err, results) => {
					const response = {
						uuid: user.selectTimer.timerselected[user.index].uuid
					}
					return res.status(200).json({ token: response });
				});
			} else if (resultss[0].uid = user.selectTimer.timerselected[user.index].uuid) {
				// console.log("update time")
				query = "update Sharetimer set viewer=?,controller=?,agenda=?,moderator=?,timer=?,timerColor=?,message=?,msgColor=?,msgBold=?,msgUppercase=?,msgBlinking=?,alltimer=? where uid=?";
				connection.query(query, [user.viewer, user.controller, user.agenda, user.moderator, user.timer, user.timercolor, user.message, user.msgcolor, user.msgbold, user.msguppercase, user.msgblink, serializedArray, user.selectTimer.timerselected[user.index].uuid], (err, results) => {
					// console.log("inside update")
					const response = {
						uuid: resultss[0].uid
					}
					return res.status(200).json({ token: response });
				});
			} else {
				// console.log("400 error")
				return res.status(400).json(err);
			}
		} else {
			// console.log("500 error")
			return res.status(500).json(err);
		}
	});
});

router.post('/getsharedLink', (req, res) => {
	const user = req.body;
	// console.log("Timer");
	// console.log(user.id);
	// console.log(user.uuid8)
	// console.log(user.timer)
	// console.log(user.selectTimer.timerselected[user.index].uuid)
	// console.log(user.selectTimer.timerselected[user.index].hours)
	query = "select * from Sharetimer where uid=?";
	connection.query(query, [user.uid], (err, results) => {
		if (!err) {
			if (results.length <= 0) {
				return res.status(500).json(err);
			} else if (results[0].uid = user.uid) {
				// console.log("update time")
				// query = "update Sharetimer set timer=? where uid=?";
				// connection.query(query, [user.timer, user.selectTimer.timerselected[user.index].uuid], (err, results) => {
				// 	console.log("inside update")

				// Deserialize the array
				const retrievedArray = JSON.parse(results[0].alltimer);
				const response = {
					uid: results[0].uid,
					timer: results[0].timer,
					timerColor: results[0].timerColor,
					message: results[0].message,
					msgColor: results[0].msgColor,
					msgBold: results[0].msgBold,
					msgUppercase: results[0].msgUppercase,
					msgBlinking: results[0].msgBlinking,
					viewer: results[0].viewer,
					controller: results[0].controller,
					agenda: results[0].agenda,
					moderator: results[0].moderator,
					alltimer: retrievedArray,
					startsTime: results[0].startstimerTime
				}
				res.status(200).json({ token: response });
				// });
			} else {
				// console.log("400 error")
				return res.status(400).json(err);
			}
		} else {
			// console.log("500 error")
			return res.status(500).json(err);
		}
	});
});

router.post('/fromsharedpage/sendMessage', (req, res) => {
	const user = req.body;
	// console.log(user.message.message)
	// console.log(user.message.isBold)
	// console.log(user.message.isUppercase)
	// console.log(user.message.textColor)

	// for(let i=0; i<=user.message.length; i++){
		const serializedArray = JSON.stringify(user.message);
	// }
	// console.log(serializedArray)

	query = "select uid from sharedmessages where uid=?";
	connection.query(query, [user.uid], (err, results) => {
		// if (!err) {
		if (results.length <= 0) {
			query = "insert into sharedmessages(uid,arrayMessage) values(?,?)";
			connection.query(query, [user.uid, serializedArray], (err, results) => {
				return res.status(200).json({ message: "success" });
			});
		} else if (results[0].uid = user.uid) {
			// console.log("id equals")
			// console.log("----------------------------------------------------------------")
			query = "update sharedmessages set arrayMessage=? where uid=?";
			connection.query(query, [serializedArray, user.uid], (err, results) => {
				return res.status(200).json({ message: "success" });
			});
		} else {
			// console.log("400 error")
			return res.status(400).json(err);
		}
		// } else {
		// 	console.log("500 error")
		// 	return res.status(500).json(err);
		// }
	});
});


router.post('/getmessages', (req, res) => {
	const user = req.body;
	// console.log("Timer");
	// console.log(user.id);
	// console.log(user.uuid8)
	// console.log(user.timer)
	// console.log(user.selectTimer.timerselected[user.index].uuid)
	// console.log(user.selectTimer.timerselected[user.index].hours)
	query = "select * from sharedmessages where uid=?";
	connection.query(query, [user.uid], (err, results) => {
		if (!err) {
			if (results.length <= 0) {
				return res.status(500).json(err);
			} else if (results[0].uid = user.uid) {

				const retrievedArray = JSON.parse(results[0].arrayMessage);
				console.log(retrievedArray)
				const response = {
					uid: results[0].uid,
					alltimer: retrievedArray
				}
				console.log(response)
				res.status(200).json({ token1: response });
				// });
			} else {
				// console.log("400 error")
				return res.status(400).json(err);
			}
		} else {
			// console.log("500 error")
			return res.status(500).json(err);
		}
	});
});



router.post('/fromsharedpage/sendTimer', (req, res) => {
	const user = req.body;
	// console.log(user.message.message)
	// console.log(user.message.isBold)
	// console.log(user.message.isUppercase)
	// console.log(user.message.textColor)

	const serializedArray = JSON.stringify(user.timers);
	// console.log(serializedArray)
	// console.log(user.uid)

	query = "select uid from sharedmessages where uid=?";
	connection.query(query, [user.uid], (err, results) => {
		if (results.length <= 0) {
			query = "insert into sharedmessages(uid,arrayTimers) values(?,?)";
			connection.query(query, [user.uid, serializedArray], (err, results) => {
				return res.status(200).json({ message: "success" });
			});
		} else if (results[0].uid = user.uid) {
			// console.log("id equals")
			// console.log("----------------------------------------------------------------")
			query = "update sharedmessages set arrayTimers=? where uid=?";
			connection.query(query, [serializedArray, user.uid], (err, results) => {
				return res.status(200).json({ message: "success" });
			});
		} else {
			// console.log("400 error")
			return res.status(400).json(err);
		}
	});
});

router.post('/getAllTimers', (req, res) => {
	const user = req.body;
	// console.log("Timer");
	// console.log(user.id);
	// console.log(user.uuid8)
	// console.log(user.timer)
	// console.log(user.selectTimer.timerselected[user.index].uuid)
	// console.log(user.selectTimer.timerselected[user.index].hours)
	query = "select * from sharedmessages where uid=?";
	connection.query(query, [user.uid], (err, results) => {
		if (!err) {
			if (results.length <= 0) {
				return res.status(500).json(err);
			} else if (results[0].uid = user.uid) {

				const retrievedArray = JSON.parse(results[0].arrayTimers);
				// console.log(retrievedArray)
				const response = {
					uid: results[0].uid,
					alltimerArray: retrievedArray
				}
				res.status(200).json({ token1: response });
				// });
			} else {
				// console.log("400 error")
				return res.status(400).json(err);
			}
		} else {
			// console.log("500 error")
			return res.status(500).json(err);
		}
	});
});

router.post('/getAllTimerstimer', (req, res) => {
	const user = req.body;
	// console.log("Timer");
	// console.log(user.id);
	// console.log(user.uuid8)
	// console.log(user.timer)
	// console.log(user.selectTimer.timerselected[user.index].uuid)
	// console.log(user.selectTimer.timerselected[user.index].hours)
	query = "select * from sharetimer where uid=?";
	connection.query(query, [user.uid], (err, results) => {
		if (!err) {
			if (results.length <= 0) {
				return res.status(500).json(err);
			} else if (results[0].uid = user.uid) {

				// const retrievedArray = JSON.parse(results[0].arrayTimers);
				// console.log(retrievedArray)
				const response = {
					uid: results[0].uid,
					timer: results[0].timer
				}
				res.status(200).json({ token1: response });
				// });
			} else {
				// console.log("400 error")
				return res.status(400).json(err);
			}
		} else {
			// console.log("500 error")
			return res.status(500).json(err);
		}
	});
});



router.post('/getAllMessages', (req, res) => {
	const user = req.body;
	console.log(user.uid)
	query = "select * from sharedmessages where uid=?";
	connection.query(query, [user.uid], (err, results) => {
		if (!err) {
			if (results.length <= 0) {
				console.log("500 first Error")
				return res.status(500).json(err);
			} else if (results[0].uid = user.uid) {

				const retrievedArray = JSON.parse(results[0].arrayMessage);
				// console.log(retrievedArray)
				const response = {
					uid: results.uid,
					alllmsg: retrievedArray
				}

				console.log(response)
				console.log("No Error")
				return res.status(200).json({ token1: response });
				// });
			} else {
				console.log("400 Error")
				return res.status(400).json(err);
			}
		} else {
			console.log("500 Error")
			return res.status(500).json(err);
		}
	});
});



module.exports = router;