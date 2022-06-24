
let triggers = document.querySelectorAll('[data-toggle="dropdown"]');
let containers = document.querySelectorAll('.dropdown-menu');

for (var i = 0; i < triggers.length; i++) {
  triggers[i].onclick = function (e) {
    e.stopPropagation();
    let target = document.getElementById(this.dataset.target);
    
    for (var j = 0; j < containers.length; j++) {
      if (containers[j].id != this.dataset.target) {
        containers[j].style.display = "none";
      }
    }

    if(target.style.display === 'none' || target.style.display === ' '){
        target.style.display = 'block'
    }else{
        target.style.display = 'none'
    }

  };

}
window.onclick = function(){
  for(var j = 0; j < containers.length; j++){
      containers[j].style.display = 'none'
  }
}
