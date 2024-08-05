function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const faBars = document.getElementById('fa-bars');
    const faClose = document.getElementById('fa-close');
    
    sidebar.style.display = 'flex';
    faBars.style.display = 'none';
    faClose.style.display = 'block';
  }
  
  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const faBars = document.getElementById('fa-bars');
    const faClose = document.getElementById('fa-close');
    
    sidebar.style.display = 'none';
    faBars.style.display = 'block';
    faClose.style.display = 'none';
  }