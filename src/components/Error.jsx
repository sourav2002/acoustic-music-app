import React, { useEffect, useState } from 'react';

const Error = ({ title }) => {
  const [url, setUrl] = useState();
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const data = await import('../assets/maintenance.png');
        setUrl(data.default);
      } catch (e) {
        throw new Error(e);
      }
    };
    fetchImage();
  }, [title]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center  text-white">
      {title === 'Under Maintenance' ? (
        <img
          src={url}
          className="mb-8 items-center flex justify-center"
        />
      ) : (
        <h1 className="font-bold w-full block text-center text-2xl items-center">
          Something went wrong. Please try again
        </h1>
      )}
    </div>
  );
};
export default Error;
