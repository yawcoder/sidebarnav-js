const toggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggle.addEventListener('click', () => {
    //console.log(sidebar.classList);
    /*if(!sidebar.classList.contains('show-sidebar')){
        sidebar.classList.add('show-sidebar');
    }else{
        sidebar.classList.remove('show-sidebar');
    }*/
    sidebar.classList.toggle('show-sidebar')
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
})