import PropTypes from 'prop-types';

const OrderCard = (props) => {
  const { id, title, image, price, handleDelete } = props;
  OrderCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    handleDelete: PropTypes.func
  };

  let renderXMarkIcon;
  if (handleDelete) {
    renderXMarkIcon = <div
      className='cursor-pointer'
      onClick={() => handleDelete(id)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  }

  return (
    <div className="flex justify-between items-center mb-2 p-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={image}
            alt={title}
          />
        </figure>

        <p className="text-sm font-light">{title}</p>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  );
};

export default OrderCard;
