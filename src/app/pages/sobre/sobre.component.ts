import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  template: `
    <p>
      sobre works!
    </p>
  `,
  styles: [
  ]
})
export class SobreComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(
      (res => {
        alert(`${res.id}, ${res.username}, ${JSON.stringify(res)}`);
      })
    );
    this.activedRoute.queryParams.subscribe(
      (res => {
        alert(`${JSON.stringify(res)}`)
      }));

    setInterval(() => {
      this.router.navigate(['404']);
      //this.router.navigateByUrl();
    }, 5000)
  }

}
