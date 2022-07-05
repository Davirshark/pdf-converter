import { Component, Input, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  @Input("contentToConvert") contentToConvert = {} as HTMLElement
  
  constructor() { }

  ngOnInit(): void {
  }

  generatePDF() {
    console.log(this.contentToConvert)
    html2canvas(this.contentToConvert).then(canvas => {
      console.log(canvas)
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      var doc = new jsPDF("p", "mm", "a4");
      var position = 0;
      doc.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      doc.save('newPDF.pdf');
    }).catch ( () => {
      console.log ("Deu erro")
      //implementação caso der erro
    }).finally( () =>{
      console.log ("Fim da promessa")
      //implementação do fim da promessa sendo erro ou não
    });
  }
}
