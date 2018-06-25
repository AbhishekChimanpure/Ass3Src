import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inside Root Componnent';

 name="";
  public mun()
  {
      return "Good Morning";
  }

  public sun()
  {
      this.name="Button Clicked";
  }

}
