import React from 'react';
import { TokenMusic } from '../logo/logo';
import { useCookies } from 'react-cookie';

import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelper';

const SignupComponent = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [cookie,setCookie ] = useCookies(["token"]);
  const navigate=useNavigate();


  const signUp = async () => {
    if (email !== confirmEmail) {
      alert('Email alag hai, doobara dekh');
      return;
    }
    const data = { email, password, username, firstname, lastname };
    const response = await makeUnauthenticatedPOSTRequest(
      '/auth/register',
      data
    );
    if (response && !response.error) {
      console.log(response);
      const token = response.token;
      const date =new Date();
      date.setDate(date.getDate()+30);
      setCookie('token', token, { path: "/", expires: date });
      alert('Success');
      navigate("/home");
    } else {
      alert('Failure');
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b-2 border-solid border-gray-300 w-full flex justify-center">
        <TokenMusic
          style={{ width: '80px', height: '80px', color: 'blue' }}
        ></TokenMusic>
      </div>
      <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
        <div className="font-bold mb-12 text-lg">
          Sign Up for free to start listening.
        </div>
        <div className="w-full">
          <TextInput
            label="Email or Username"
            placeholder="Email ID or username"
            className="my-4"
            value={email}
            setValue={setEmail}
          />
          <TextInput
            label="Confirm your Email"
            placeholder="Confirm your Email"
            className="my-4"
            value={confirmEmail}
            setValue={setConfirmEmail}
          />
          <TextInput
            label="Username"
            placeholder="Enter a Username"
            className="my-4"
            value={username}
            setValue={setUsername}
          />
          <div className="w-full flex justify-between items-center space-x-8">
            <TextInput
              label="FirstName"
              placeholder="Firstname"
              className="my-4"
              value={firstname}
              setValue={setfirstname}
            />
            <TextInput
              label="LastName"
              placeholder="Username"
              className="my-4"
              value={lastname}
              setValue={setlastname}
            />
          </div>
          <PasswordInput
            label="Create Password"
            placeholder="Enter a strong Password"
            value={password}
            setValue={setPassword}
          />
          <div className="w-full flex items-center justify-end my-8">
            <button
              className="bg-blue-400 font-semibold p-3 px-10 rounded-full"
              onClick={(e) => {
                e.preventDefault();
                signUp();
              }}
            >
              SIGN UP
            </button>
          </div>
        </div>
        <div className="w-full border-b-2 border-solid border-gray-300"></div>
        <div className="my-6 font-semibold text-xl ">
          Already have an account?
        </div>
        <div className="w-full border border-gray-500 text-gray-500 flex items-center justify-center rounded-full p-3 font-bold">
          <Link to="/login">LOG IN INSTEAD</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
