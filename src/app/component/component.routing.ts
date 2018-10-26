import { Routes } from '@angular/router';


import { BilleteraComponent } from "./Billetera/Billetera.component";
import { CobrarMillasComponent } from "./CobrarMillas/CobrarMillas.component";
import { AcreditarMillasComponent } from "./AcreditarMillas/AcreditarMillas.component";
import { CambiarMillasComponent } from "./CambiarMillas/CambiarMillas.component";
import { ClienteComponent } from "./Cliente/Cliente.component";
import { ComercioComponent } from "./Comercio/Comercio.component";
import { EmisorComponent } from "./Emisor/Emisor.component";
import { PropietarioComponent } from "./Propietario/Propietario.component";

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'Billetera',
      component: BilleteraComponent,
      data: {
        title: 'Billetera',
        urls: [{title: 'Inicio',url: '/dashboard'},{title: 'Billetera'}]
      }
    },
    {
      path: 'CobrarMillas',
      component: CobrarMillasComponent,
      data: {
        title: 'Cobrar',
        urls: [{title: 'Inicio',url: '/dashboard'},{title: 'Cobrar'}]
      }
    },
    {
      path: 'AcreditarMillas',
      component: AcreditarMillasComponent,
      data: {
        title: 'Acreditar Millas',
        urls: [{title: 'Inicio',url: '/dashboard'},{title: 'Acreditar Millas'}]
      }
    },
    {
      path: 'CambiarMillas',
      component: CambiarMillasComponent,
      data: {
        title: 'Compra',
        urls: [{title: 'Inicio',url: '/dashboard'},{title: 'Compra'}]
      }
    },
    {
      path: 'Cliente',
      component: ClienteComponent,
      data: {
        title: 'Cliente',
        urls: [{title: 'Inicio',url: '/dashboard'},{title: 'Cliente'}]
      }
    },
    {
      path: 'Comercio',
      component: ComercioComponent,
      data: {
        title: 'Comercio',
        urls: [{title: 'Inicio',url: '/dashboard'},{title: 'Comercio'}]
      }
    },
    {
      path: 'Emisor',
      component: EmisorComponent,
      data: {
        title: 'Emisor',
        urls: [{title: 'Inicio',url: '/dashboard'},{title: 'Emisor'}]
      }
    },
    {
      path: 'Propietario',
      component: PropietarioComponent,
      data: {
        title: 'Propietario',
        urls: [{title: 'Inicio',url: '/dashboard'},{title: 'Propietario'}]
      }
    }]
  }
];
