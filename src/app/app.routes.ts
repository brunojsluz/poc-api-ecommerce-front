import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'cadastro/:codigo', component: CadastroComponent },
    { path: 'cadastro-material', component: CadastroMaterialComponent },
    { path: '**', component: ListagemComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
