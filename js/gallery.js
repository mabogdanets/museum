const gallery__picture_all = document.querySelectorAll('.gallery__picture');

const array = [
  'g1', 'g2', 'g3', 'g4', 'g5',
  'g6', 'g7', 'g8', 'g9', 'g10',
  'g11', 'g12', 'g13', 'g14', 'g15'
 ];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);  
}

const shuffleArr = shuffle(array);

for (let i=0; i < 15; i++) {
  const img = document.createElement('img');
  img.classList.add('gallery__img')
  img.src = `assets/img/galery/${shuffleArr[i]}.jpg`;
  img.alt = `${shuffleArr[i]}`;
  gallery__picture_all[i].append(img);
}

/*
const hi = document.getElementById("ermnfgve");
hi.add*/