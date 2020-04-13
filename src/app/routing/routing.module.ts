import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { RepoListService } from '../repo-list/repo-list.service';


const routes: Routes = [
    {path:'profile',component:ProfileComponent},
    {path:'repos',component:RepoListService},
    {path:'',redirectTo:"Profile",pathMatch:'full'},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule { }