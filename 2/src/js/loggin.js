let form = document.getElementById('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(document.getElementById('user-name').value.toLowerCase() == 'admin'){
        document.location.href = '../index.html';
    }else{
        confirm('usuario no encontrado');
    }
})