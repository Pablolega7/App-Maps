import { AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styles: [`
  div{
    width:100px;
    height:150px;
    margin:0px;}
  `
  ]
})
export class MiniMapaComponent implements AfterViewInit {

  @Input() lnglat:[number,number]=[0,0];
  @ViewChild("mapa") divmapa!:ElementRef;
  mapa!:mapboxgl.Map;

  constructor() { }


  ngAfterViewInit(): void {
    const mapa = new mapboxgl.Map({
      container:this.divmapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center:this.lnglat,
      zoom:15,
      interactive:false
    });

    new mapboxgl.Marker()
    .addTo(mapa)
    .setLngLat(this.lnglat);
  };

}
