import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Friend } from '../../models/friendmodel';
import { FriendrestProvider } from '../../providers/friendrest/friendrest';


@Component({
  selector: 'page-frienddetail',
  templateUrl: 'frienddetail.html',
})
export class FrienddetailPage {

  studentid:number;
  friend:Friend;

  constructor(private friendRest:FriendrestProvider ,public navCtrl: NavController, public navParams: NavParams) {
  }

  
  ionViewWillEnter(){
    this.studentid=this.navParams.get("studentid");
    this.friendRest.getfriendlist().subscribe(data=>{
    this.friend=data.filter(friend=>friend.studentid === this.studentid)[0];
    })
  }
  
  ionViewDidLoad() {
    this.studentid=this.navParams.get("studentid");
    console.log(this.studentid);
  }
  gotoBack(){
    this.navCtrl.pop();
  }

}
