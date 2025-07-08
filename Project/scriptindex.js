function navigate(page) {
  const content = document.getElementById('content');
  switch (page) {
    case 'Game1':
      content.innerHTML = `
          <video controls autoplay muted loop>
            <source src="https://video.fastly.steamstatic.com/store_trailers/256706800/movie480.webm?t=1516828564" type="video/webm">
                    Trình duyệt của bạn không hỗ trợ video.
          </video>
      `;
      break;
    case 'Game2':
      content.innerHTML = `
          <video controls autoplay muted loop>
            <source src="https://video.fastly.steamstatic.com/store_trailers/257059180/movie480_vp9.webm?t=1727388825" type="video/webm">
                    Trình duyệt của bạn không hỗ trợ video.
          </video>
      `;
      break;
    case 'community':
      content.innerHTML = `
        <h2>Cộng Đồng</h2>
        <p>Diễn đàn, bình luận, kết bạn và nhiều hơn nữa.</p>
      `;
      break;
    default:
      content.innerHTML = `<p>Không tìm thấy trang.</p>`;
  }
}

function selectImage(element) {
  // Xóa class .selected-border khỏi tất cả phần tử có class clickable-img
  document.querySelectorAll('.clickable-img').forEach(el => {
    el.classList.remove('selected-border');
  });

  // Thêm class vào phần tử được click
  element.classList.add('selected-border');
}