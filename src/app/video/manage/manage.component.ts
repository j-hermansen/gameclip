import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { ClipService } from 'src/app/services/clip.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  videoOrder = '1';

  constructor(private router: Router, private route: ActivatedRoute, private clipService: ClipService) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      const sort = params.get('sort');
      this.videoOrder = sort === '2' ? sort : '1';
    });

    this.clipService.getUserClips().subscribe(console.log);
  }

  sort(event: Event) {
    const { value } = (event.target) as HTMLSelectElement;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        sort: value
      }
    });
  }


}


