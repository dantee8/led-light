const ProductCard = ({
  product,
  onIncrement,
  onDecrement,
  onAddToCart,
  quantity,
}) => {
  const { id, img, description, name } = product;

  return (
    <div className="border-2 rounded flex flex-col justify-between   " key={id}>
      <img
        className="w-[200px] h-[200px] object-cover m-auto"
        src={img}
        alt=""
      />
      <div className="m-auto flex flex-col text-center">
        <h2 className="text-blue-400 m-auto px-2">{name}</h2>
        <p className="m-3 text-left font-extralight">{description}</p>
      </div>
      <div className="flex flex-col m-auto ">
        <div className="flex items-center justify-center "></div>
        <button
          onClick={onAddToCart}
          className=" border-[1px] w-60 my-3 justify-center rounded bg-blue-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
