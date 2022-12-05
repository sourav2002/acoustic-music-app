import React, { useState } from 'react';
import {
  Card,
  Input,
  Button,
  CardBody,
  CardFooter,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserKey } from '../redux/features/userKeySlice';

const Error = () => {
  const [key, setKey] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserKey({ mykey: key }));
    navigate('/');
  };
  const { user_key } = useSelector((state) => state.key);
  return (
    <div className="w-full flex flex-col justify-center items-center  text-white">
      <h1 className="font-bold w-full block text-center text-2xl">
        Something went wrong. Please try again
      </h1>
      <Card className="w-96 mt-20">
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
      <div>{ user_key }</div>
    </div>
  );
};

export default Error;
