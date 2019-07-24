import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public loading: boolean;
  public quote: string;
  public autor: string;
  constructor(private service: ServicioService) { }

  ngOnInit() {
    this.getQuotes();
  }

  getQuotes(){
    this.loading = true;
    return this.service.getQuotes()
    .subscribe( data => {
      this.quote = data.quote;
      this.autor = data.autor;
      this.loading = false;
      return data;
    });
  }
}
