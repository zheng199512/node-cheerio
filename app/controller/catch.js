"use strict";

const Controller = require("egg").Controller;
const cheerio = require("cheerio");
const nodejieba=require("nodejieba");

class CookieController extends Controller {
  async catch() {
    var songUrl = "http://music.migu.cn/v3/music/top";
    var data=await this.ctx.service.catchService.catch(songUrl);
    var html=data.data.toString("utf-8");
    var songId=[];
    var songName=[]
    var lyricsString="";
    var $=cheerio.load(html);
    $('div.songlist-item').each(function(i,e){
      songId.push($(e).attr("data-cid"));
    })
    songId.pop();
    $('span.song-name-text a').each(function(i,e){
      songName.push($(e).text());
    })
    var lyric=await this.ctx.service.catchService.catchSongLyric(songId);
    var regex=/\s+|[a-zA-Z]/g;
    for(let i=0;i<lyric.length;i++){
      lyricsString+=lyric[i].replace(regex,"");
    }
    var result = nodejieba.cut(lyricsString);
    var a=nodejieba.extract(result,200);
    var resData=[];
    for(let i=0;i<a.length;i++){
      resData.push([a[i].word,Math.ceil(a[i].weight/3)]);
    }
    this.ctx.body=resData;
  }
}

module.exports = CookieController;
