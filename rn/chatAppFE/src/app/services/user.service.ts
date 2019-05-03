import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baserurl';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

getUsers() {
    return this.http.get<any>(baseURL+'/users/getUsers');    
}

getChatRoomsChat(chatRoom) {
  return this.http.get<any>(baseURL+'/users/getUsers/'+chatRoom);
}

getLoggedInUser(){
  return localStorage.getItem('user');
}

getLoggedInUserId(){
  return localStorage.getItem('id');
}

getChatRoom(user){
  return this.http.get<any>(baseURL+'/chat/findRoom/'+user.id)
}

createChatRoom(user){
  return this.http.post<any>(baseURL+'/chat/createRoom/',user.id)
}

}
