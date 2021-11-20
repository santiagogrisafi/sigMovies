import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: String): String {
    if(!images){
      return "./assets/noimage.jpg";
    }
    if(images){
      return "https://image.tmdb.org/t/p/w300"+images;
    }else{
      return "./assets/noimage.jpg";
    }
  }

}
