import { AppErrorHandler } from './common/app-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { group } from '@angular/animations';
import { NgModule, ErrorHandler, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpModule } from '@angular/http';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { MatStepperModule } from '@angular/material/stepper';
import { PostService } from './services/post.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { TestComponent } from './test/test.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { TeamComponent } from './team/team.component';
import { iAppState, rootReducer, INITIAL_STATE } from './store';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { UserCardComponent } from './header/user-card/user-card.component';
import { ItemComponent } from './item/item.component';
import { ColoryDirective } from './colory.directive';
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    NotfoundComponent,
    HomeComponent,
    AboutComponent,
    LocationComponent,
    AboutUserComponent,
    TestComponent,
    TeamComponent,
    UserCardComponent,
    ItemComponent,
    ColoryDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    HttpModule,
    MatExpansionModule,
    MatStepperModule,
    FormsModule,
    MatListModule,
    MatTooltipModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    NgReduxModule,
    Ng2CarouselamosModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'about/:username', component: AboutUserComponent },
      {path: 'about', component: AboutComponent },
      {path: 'post', component: PostComponent },
      {path: 'location', component: LocationComponent },
      {path: '**', component: NotfoundComponent },
    ])
  ],
  providers: [
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (ngRedux: NgRedux<iAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
 }
