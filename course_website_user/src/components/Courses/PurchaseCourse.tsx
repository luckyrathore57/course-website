import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { baseURL } from '../../constant';

interface PurchaseCourseProps {
  courseId: string;
}

const PurchaseCourse: React.FC<PurchaseCourseProps> = ({ courseId }) => {
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('token'); // Assuming you have the JWT token stored in localStorage
      const response: AxiosResponse<string> = await axios.post(
        `${baseURL}/user/courses/${courseId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage('An unexpected error occurred');
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handlePurchase}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={isLoading}
      >
        {isLoading ? 'Purchasing...' : 'Purchase Course'}
      </button>
      {message && (
        <p className={`mt-2 ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default PurchaseCourse;