"use strict";
const cheerio = require("cheerio");
const Service = require("egg").Service;
class CatchService extends Service {
  async catch(url) {
    return this.ctx.curl(url);
  }
  // async catchLyric(songId){
  //   var getLyricUrl="http://music.migu.cn/v3/api/music/audioPlayer/getLyric?copyrightId=";
  //   var lyric=[];
  //   for(let i=0;i<songId.length;i++){
  //     var data= await this.ctx.curl(getLyricUrl+songId[i]);
  //     lyric.push(JSON.parse(data.data.toString("utf-8")).lyric);
  //   }
  //   return lyric;
  // }

  async catchSongLyric(songId) {
    var data,html;
    var lyrics=[];
    for (let i = 0; i < songId.length; i++) {
      data = await this.ctx.curl(
        "http://music.migu.cn/v3/music/song/" + songId[i]
      );
      html=data.data.toString("utf-8");
      var $=cheerio.load(html);
      var songLyric="";
      $("p.lyric-text").each(function (i,e){
        if($(e).text().indexOf('：')===-1){
          if($(e).text().indexOf(':')===-1){
            songLyric+=$(e).text();
          }
        }
      })
      lyrics.push(songLyric);
    }
    return lyrics
  }
}
module.exports = CatchService;
