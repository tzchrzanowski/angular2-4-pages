import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VideoComponent } from './video/video.component';
import { CornerButtonComponent } from './corner-button/corner-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app works!';
  // mr robot
  titleCaptionMR:string = 'Mr Robot';
  imgValueMR: string = '../assets/img/robot2.png';
  noteCaptionMR:string = 'Follows Elliot, a young programmer working as a cyber-security engineer by day, and a vigilante hacker by night.';

  // silicon valley
  titleCaptionSV:string = 'Silicon Valley';
  imgValueSV: string = '../assets/img/silicon2.jpg';
  noteCaptionSV:string = 'Follows the struggle of Richard Hendricks, a silicon valley engineer trying to build his own company called Pied Piper';
  // halt and catch fire
  titleCaptionHaCF:string = 'Halt and catch fire';
  imgValueHaCF: string = '../assets/img/halt2.png';
  noteCaptionHaCF:string = "Set in the 1980s, this series dramatizes the personal computing boom through the eyes of a visionary, an engineer and a prodigy whose innovations directly confront the corporate behemoths of the time. Their personal and professional partnership will be challenged by greed and ego while charting the changing culture in Texas' Silicon Prairie.- Written by AMC";
  // ghost in the shell
  titleCaptionGitS:string = 'Ghost in the shell';
  imgValueGitS: string = '../assets/img/ghost2.png';
  noteCaptionGitS:string = "In the near future, Major is the first of her kind: A human saved from a terrible crash, who is cyber-enhanced to be a perfect soldier devoted to stopping the world's most dangerous criminals.";

}
