const Cart = () => {
  return (
    <div className="pt-24 px-[10%]">
      <h2>Giỏ hàng</h2>
      <div className="flex flex-row justify-between">
        <div className="w-3/4">
          <div className="flex flex-row justify-between">
            <div>Tất cả</div>
            <div>Đơn giá</div>
            <div>Số lượng</div>
            <div>Thành tiền</div>
            <div>
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>Cà phê chính hãng</div>
            <div>300$</div>
            <div>2</div>
            <div>600$</div>
            <div>
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <h3>Giao tới</h3>
          <p>Văn phòng</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
