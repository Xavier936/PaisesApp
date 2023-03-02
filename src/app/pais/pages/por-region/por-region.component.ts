import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }`
  ]
})
export class PorRegionComponent {
  regiones: string[] = ['eu', 'efta', 'caricom', 'pa', 'au', 'usan', 'eeu ', 'al', 'asean', 'cais', 
    'cefta', 'nafta', 'saarc' ];

    regionActiva: string = '';
    hayError: boolean = false;
    paises: Country[] = [];

    constructor(private paisService: PaisService){}

    getClaseCss(region:string): string{
      return (region === this.regionActiva)? 'btn btn-primary': 'btn btn-outline-primary'
    }
    
    activarRegion(region: string){
      this.regionActiva= region;
    }
    
    buscaRegion(region: string){

      if(region === this.regionActiva){return}
      this.paisService.buscarRegion(region).subscribe((paises)=>{
        //console.log(paises);
        this.paises = paises;
      },(err)=>{
        this.paises=[];
      });
    }

    

}
