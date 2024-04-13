function openSideBar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) { // Check if the element exists before manipulating
      sidebar.style.display = 'flex';
    } else {
      console.error("Sidebar element with class '.sidebar' not found!");
    }
  }