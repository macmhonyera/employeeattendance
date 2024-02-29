import React from 'react'
import ViewProduct from './ViewProduct';

const ViewSingleProduct = (props) => {
  const { product } = props;
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpenModal = () => {
      setIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsOpen(false);
    };
  
    return (
      <div>
        <button onClick={handleOpenModal} className="flex items-center space-x-4 w-full h-8 bg-orange-500 text-gray-800 border  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">View</button>
        <ViewProduct product={product} isOpen={isOpen} onClose={handleCloseModal} />
      </div>
    );
}

export default ViewSingleProduct