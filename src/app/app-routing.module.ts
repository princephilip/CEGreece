import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RorComponent } from './ror/ror.component';
import { ContactComponent } from './contact/contact.component';
import { OnlineStoreComponent } from './online-store/online-store.component';
import { WorshipWithUsComponent } from './worship-with-us/worship-with-us.component';
import { OnlineChurchComponent } from './online-church/online-church.component';
import { MeetPastorChrisComponent } from './meet-pastor-chris/meet-pastor-chris.component';
import { OurMinistryComponent } from './our-ministry/our-ministry.component';

const routes: Routes = [
  {path: '', component: HomeComponent  },
  {path: 'worship-with-us', component:WorshipWithUsComponent},
  {path: 'ror', component: RorComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'media', component: OnlineStoreComponent},
  {path: 'online-church', component: OnlineChurchComponent},
  {path: 'meet-pastor-chris', component: MeetPastorChrisComponent},
  {path: 'our-ministry', component: OurMinistryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
