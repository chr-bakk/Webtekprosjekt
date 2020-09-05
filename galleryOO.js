class Image{
  constructor(number,file=number+".jpg",name,date,price){
    this.file = file
    this.number = number+".jpg"
    this.name = name
    this.date = date
    this.price = price
  }
  getName() {return this.file.split('.',0)}
  drawImage()
}

class Gallery{
  populateGallery(){}
}

class DBI{
  constructor(type='php'){
    this.type = type
  }
  returnImage(n){if php yes bar}
  returnImagePHP(n){
    return new Image(getFile(n),getName(n),getDate(n),getPrice(n))
  }
}
