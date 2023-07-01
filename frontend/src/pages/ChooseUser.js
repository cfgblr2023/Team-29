// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Grid,
//   Card,
//   CardContent,
//   Box,
//   Container,
//   CircularProgress,
//   Backdrop,
//   Typography,
//   Slide,
// } from '@mui/material';

// import { AccountCircle, School, Group } from '@mui/icons-material';
// import styled from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../redux/userRelated/userHandle';
// import Popup from '../components/Popup';
// import image_url from '../assets/image_url.png';
// const ChooseUser = ({ visitor }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const password = 'zxc';

//   const { status, currentUser, currentRole } = useSelector(
//     (state) => state.user
//   );

//   const [loader, setLoader] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [message, setMessage] = useState('');

// const navigateHandler = (user) => {
//   if (user === 'Admin') {
//     if (visitor === 'guest') {
//       const email = 'yogendra@12';
//       const fields = { email, password };
//       setLoader(true);
//       dispatch(loginUser(fields, user));
//     } else {
//       navigate('/Adminlogin');
//     }
//   } else if (user === 'Student') {
//     if (visitor === 'guest') {
//       const rollNum = '1';
//       const studentName = 'Janak Raj Ojha';
//       const fields = { rollNum, studentName, password };
//       setLoader(true);
//       dispatch(loginUser(fields, user));
//     } else {
//       navigate('/Studentlogin');
//     }
//   } else if (user === 'Teacher') {
//     if (visitor === 'guest') {
//       const email = 'tony@12';
//       const fields = { email, password };
//       setLoader(true);
//       dispatch(loginUser(fields, user));
//     } else {
//       navigate('/Teacherlogin');
//     }
//   }
// };

// useEffect(() => {
//   if (status === 'success' || currentUser !== null) {
//     if (currentRole === 'Admin') {
//       navigate('/Admin/dashboard');
//     } else if (currentRole === 'Student') {
//       navigate('/Student/dashboard');
//     } else if (currentRole === 'Teacher') {
//       navigate('/Teacher/dashboard');
//     }
//   } else if (status === 'error') {
//     setLoader(false);
//     setMessage('Network Error');
//     setShowPopup(true);
//   }
// }, [status, currentRole, navigate, currentUser]);

//   return (
//     <StyledContainer>
//       <Container>
//         <Grid container spacing={2} justifyContent="center">
//           <Grid item xs={12} sm={6} md={4}>
//             <Slide direction="right" in={true} timeout={500}>
//               <Card>
//                 <CardContent>
//                   <div onClick={() => navigateHandler('Admin')}>
//                     <Box mb={2}>
//                       <AccountCircle fontSize="large" />
//                     </Box>
//                     <Typography variant="h5">Program Controller</Typography>
//                     <Typography variant="body2">
//                       Login as a program controller to coordinate among the
//                       mentors and mentees
//                     </Typography>
//                   </div>
//                 </CardContent>
//               </Card>
//             </Slide>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Slide direction="up" in={true} timeout={500}>
//               <Card>
//                 <CardContent>
//                   <div onClick={() => navigateHandler('Student')}>
//                     <Box mb={2}>
//                       <School fontSize="large" />
//                     </Box>
//                     <Typography variant="h5">Mentee</Typography>
//                     <Typography variant="body2">
//                       Login as a mentee to match with the mentors
//                     </Typography>
//                   </div>
//                 </CardContent>
//               </Card>
//             </Slide>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Slide direction="left" in={true} timeout={500}>
//               <Card>
//                 <CardContent>
//                   <div onClick={() => navigateHandler('Teacher')}>
//                     <Box mb={2}>
//                       <Group fontSize="large" />
//                     </Box>
//                     <Typography variant="h5">Mentor</Typography>
//                     <Typography variant="body2">
//                       Login as a mentor for mentoring the students
//                     </Typography>
//                   </div>
//                 </CardContent>
//               </Card>
//             </Slide>
//           </Grid>
//         </Grid>
//       </Container>
//       <Backdrop
//         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={loader}
//       >
//         <CircularProgress color="inherit" />
//         Please Wait
//       </Backdrop>
//       <Popup
//         message={message}
//         setShowPopup={setShowPopup}
//         showPopup={showPopup}
//       />
//     </StyledContainer>
//   );
// };

// export default ChooseUser;

// const StyledContainer = styled.div`
//   background: url(${image_url}) no-repeat center center fixed;
//   background-size: cover;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 2rem;

//   @media (max-width: 600px) {
//     padding: 1rem;
//   }
// `;

// // Add the rest of your styles here
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  Box,
  Container,
  CircularProgress,
  Backdrop,
  Typography,
  Slide,
} from '@mui/material';

import { AccountCircle, School, Group } from '@mui/icons-material';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';
import image_url from '../assets/image_url.png';
const ChooseUser = ({ visitor }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const password = 'zxc';

  const { status, currentUser, currentRole } = useSelector(
    (state) => state.user
  );

  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');

  const navigateHandler = (user) => {
    if (user === 'Admin') {
      if (visitor === 'guest') {
        const email = 'yogendra@12';
        const fields = { email, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Adminlogin');
      }
    } else if (user === 'Student') {
      if (visitor === 'guest') {
        const rollNum = '1';
        const studentName = 'Janak Raj Ojha';
        const fields = { rollNum, studentName, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Studentlogin');
      }
    } else if (user === 'Teacher') {
      if (visitor === 'guest') {
        const email = 'tony@12';
        const fields = { email, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Teacherlogin');
      }
    }
  };

  useEffect(() => {
    if (status === 'success' || currentUser !== null) {
      if (currentRole === 'Admin') {
        navigate('/Admin/dashboard');
      } else if (currentRole === 'Student') {
        navigate('/Student/dashboard');
      } else if (currentRole === 'Teacher') {
        navigate('/Teacher/dashboard');
      }
    } else if (status === 'error') {
      setLoader(false);
      setMessage('Network Error');
      setShowPopup(true);
    }
  }, [status, currentRole, navigate, currentUser]);

  return (
    <StyledContainer>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Slide direction="right" in={true} timeout={500}>
              <StyledPaperProgramCoordinator>
                <div onClick={() => navigateHandler('Admin')}>
                  <Box mb={2}>
                    <AccountCircle fontSize="large" />
                  </Box>
                  <Typography variant="h5">Program Coordinator</Typography>
                  <Typography variant="body2">
                    Login as a program coordinator to coordinate among the
                    mentors and mentees
                  </Typography>
                </div>
              </StyledPaperProgramCoordinator>
            </Slide>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Slide direction="up" in={true} timeout={500}>
              <StyledPaperMentee>
                <div onClick={() => navigateHandler('Student')}>
                  <Box mb={2}>
                    <School fontSize="large" />
                  </Box>
                  <Typography variant="h5">Mentee</Typography>
                  <Typography variant="body2">
                    Login as a mentee to match with the mentors
                  </Typography>
                </div>
              </StyledPaperMentee>
            </Slide>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Slide direction="left" in={true} timeout={500}>
              <StyledPaperMentor>
                <div onClick={() => navigateHandler('Teacher')}>
                  <Box mb={2}>
                    <Group fontSize="large" />
                  </Box>
                  <Typography variant="h5">Mentor</Typography>
                  <Typography variant="body2">
                    Login as a mentor for mentoring the students
                  </Typography>
                </div>
              </StyledPaperMentor>
            </Slide>
          </Grid>
        </Grid>
      </Container>
      {/* ...rest of the code */}
    </StyledContainer>
  );
};

export default ChooseUser;

const StyledContainer = styled.div`
  background: url(${image_url}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const StyledPaper = styled(Card)`
  padding: 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 1);
  }
`;

const StyledPaperProgramCoordinator = styled(StyledPaper)`
  position: relative;
  z-index: 3;
`;

const StyledPaperMentee = styled(StyledPaper)`
  position: relative;
  z-index: 2;
`;

const StyledPaperMentor = styled(StyledPaper)`
  position: relative;
  z-index: 1;
`;
