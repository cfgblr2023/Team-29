import axios from "axios";

export const mentorSignUp = async (target) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/auth/signup`, {
      name: target.name.value,
      phoneNumber: target.phone.value,
      currentCity: target.city.value,
      address: target.address.value,
      gender: target.gender.value,
      dateOfBirth: target.dob.value,
      ageGroup: target.age.value,
      occupation: target.occupation.value,
      experience: target.experience.value
    }
  );
  console.log(data);
  if (!data.success) {
    return false;
  }
  return true;
};
