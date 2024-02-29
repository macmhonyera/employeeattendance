import React from 'react'
import ProductModal from '../AddProduct';

const EditProduct = (props) => {
    const [myModal, setMyModal] = React.useState(false);
  const handleOnClose = () => setMyModal(false);

  
    return (
      <div>
        <button
            onClick={() => setMyModal(true)}
            type="button"
            className={
              props.product
                ? "flex items-center space-x-4 w-full h-8 bg-gray-300 text-gray-900 border  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                : "rounded  border-fuchsia-800 shadow text-white bg-[#17486f] font-bold p-2"
            }
          >
            {props.product ? "Edit" : "+ Add Product"}
          </button>
          <ProductModal
            product={props.product}
            onClose={handleOnClose}
            visible={myModal}
          />
      </div>
    );
}

export default EditProduct