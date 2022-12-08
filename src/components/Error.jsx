import React from 'react';
// import {
//   Card,
//   Input,
//   Button,
//   CardBody,
//   CardFooter,
// } from '@material-tailwind/react';
// import { json, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logo } from '../assets/index';
// import { setUserKey } from '../redux/features/userKeySlice';
const Error = () =>
  // const [key, setKey] = useState('');
  // const [msg, setmsg] = useState('');
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(setUserKey({ mykey: key }));
  //   navigate('');
  // };
  // const sendNotification = (e) => {
  //   e.preventDefault();
  //   Notification.requestPermission().then((prem) => {
  //     const user = JSON.parse(localStorage.getItem('user'));
  //     if (prem === 'granted') {
  //       // eslint-disable-next-line no-new
  //       new Notification(`New Message from ${user.name}`, {
  //         body: msg,
  //         icon: logo,
  //         // tag: 'my msg',
  //       });
  //     }
  //     console.log(`${user.name} = ${msg}`);
  //   });
  // };
  // const { user_key } = useSelector((state) => state.key);
  (
    <div className="w-full flex flex-col justify-center items-center  text-white">
      <h1 className="font-bold w-full block text-center text-2xl">
        Something went wrong. Please try again
      </h1>
      {/* <Card className="w-96 mt-20">
        <CardBody className="flex flex-col gap-4">
          <Input
            label="API Key"
            size="lg"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth onClick={handleSubmit}>
            Test Now
          </Button>
        </CardFooter>
      </Card>
      <div className="text-bold "> You entered :  { user_key }</div>
      <div className="mt-2">
        <Card className="w-96 mt-20">
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Write Message"
              size="lg"
              value={msg}
              onChange={(e) => setmsg(e.target.value)}
            />
            <Button variant="gradient" fullWidth onClick={sendNotification}>
              Send Notification
            </Button>
          </CardBody>
        </Card>
      </div> */}
    </div>
  );
export default Error;
