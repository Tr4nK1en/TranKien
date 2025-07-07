function navigate(page) {
  const content = document.getElementById('content');
  switch (page) {
    case 'home':
      content.innerHTML = `
        <h2>Trang Chủ</h2>
        <p>section 1</p>
        <p>section 2</p>
        <p>section 3</p>
      `;
      break;
    case 'community':
      content.innerHTML = `
        <h2>Cộng Đồng</h2>
        <p>Diễn đàn, bình luận, kết bạn và nhiều hơn nữa.</p>
      `;
      break;
    case 'market':
      content.innerHTML = `
        <h2>Market</h2>
        <p>Chào mừng đến với cửa hàng GameFM! Xem và mua vật phẩm tại đây.</p>
      `;
      break;
    case 'support':
      content.innerHTML = `
        <h2>Hỗ Trợ</h2>
        <p>Gửi yêu cầu hỗ trợ hoặc tra cứu hướng dẫn.</p>
      `;
      break;
    case 'mygame':
      content.innerHTML = `
        <h2>MyGame</h2>
        <p>Quản lý trò chơi bạn đã mua hoặc chơi gần đây.</p>
      `;
      break;
    default:
      content.innerHTML = `<p>Không tìm thấy trang.</p>`;
  }
}
function navigate(page) {
  const content = document.getElementById('content');

  // Thêm class fade-out để bắt đầu ẩn nội dung
  content.classList.add('fade-out');

  // Sau khi fade-out xong (500ms), đổi nội dung và fade-in
  setTimeout(() => {
    switch (page) {
      case 'home':
        content.innerHTML = `
          <h2>Trang Chủ</h2>
          <p>section 1</p>
          <p>section 2</p>
          <p>section 3</p>
        `;
        break;
      case 'community':
        content.innerHTML = `
          <h2>Cộng Đồng</h2>
          <p>Diễn đàn, bình luận, kết bạn và nhiều hơn nữa.</p>
        `;
        break;
      case 'market':
        content.innerHTML = `
          <h2>Market</h2>
          <p>Chào mừng đến với cửa hàng GameFM! Xem và mua vật phẩm tại đây.</p>
        `;
        break;
      case 'support':
        content.innerHTML = `
          <h2>Hỗ Trợ</h2>
          <p>Gửi yêu cầu hỗ trợ hoặc tra cứu hướng dẫn.</p>
        `;
        break;
      case 'mygame':
        content.innerHTML = `
          <h2>MyGame</h2>
          <p>Quản lý trò chơi bạn đã mua hoặc chơi gần đây.</p>
        `;
        break;
      default:
        content.innerHTML = `<p>Không tìm thấy trang.</p>`;
    }

    // Xóa fade-out và thêm fade-in để hiện lại nội dung
    content.classList.remove('fade-out');
    content.classList.add('fade-in');

    // Sau 500ms, xóa class fade-in để tránh lỗi sau này
    setTimeout(() => {
      content.classList.remove('fade-in');
    }, 500);
  }, 500);
}
