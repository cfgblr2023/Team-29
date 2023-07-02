const Mentee = require("../models/model.mentee");
const Mentor = require("../models/model.mentor");

const matcher = async (req, res) => {
  let mentees = await Mentee.find();
  let timeMatched = [];
  for (let i = 0; i < mentees.length; i++) {
    let mentors = await Mentor.find({
      preferredTimeSlot: mentees[i].preferredTimeSlot,
    });
    timeMatched.push({
      mentors,
      mentee: mentees[i],
    });
  }
  let languagesMatched = [];
  for (let i = 0; i < timeMatched.length; i++) {
    let menteeObject = timeMatched[i];
    let tempLanguagesMatched = [];
    for (let j = 0; j < menteeObject.mentors.length; j++) {
      for (let k = 0; k < menteeObject.mentors[j].languagesSpoken.length; k++) {
        if (
          menteeObject.mentee.languagesSpoken.includes(
            menteeObject.mentors[j].languagesSpoken[k]
          )
        ) {
          tempLanguagesMatched.push(menteeObject.mentors[j]);
          break;
        }
      }
      languagesMatched.push({
        mentors: tempLanguagesMatched,
        mentee: mentees[i],
      });
    }
  }
  let basisMatched = [];
  for (let i = 0; i < languagesMatched.length; i++) {
    let menteeObject = languagesMatched[i];
    let tempBasisMatched = [];
    for (let j = 0; j < menteeObject.mentors.length; j++) {
      if (
        menteeObject.mentee.basisOfMapping ===
        menteeObject.mentors[j].basisOfMapping
      ) {
        console.log(menteeObject.mentee.basisOfMapping)
        console.log(menteeObject.mentors[j].basisOfMapping)
        tempBasisMatched.push(menteeObject.mentors[j]);
      }
    }
    basisMatched.push({
      mentors: tempBasisMatched,
      mentee: mentees[i],
    });
  }
  res.send(basisMatched);
};

module.exports = matcher;
