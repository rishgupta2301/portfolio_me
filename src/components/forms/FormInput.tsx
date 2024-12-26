import React from 'react';
import { motion } from 'framer-motion';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const FormInput = ({ name, disabled = false, ...props }: FormInputProps) => {
  return (
    <motion.input
      {...props}
      name={name}
      disabled={disabled}
      className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 text-white"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    />
  );
};

export default FormInput;