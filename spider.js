var http=require('http');
var cheerio=require('cheerio');
var fs=require('fs');
function downLoad(url,cb){
    http.get(url,function(res){
        res.setEncoding("binary");
        var data='';
        res.on('data',function(chunk){
            data +=chunk;
        })
        res.on('end',function(){
            cb(data)
        })
    }).on('error',function(){
        cb(null)
    })
}

function saveImg(url){
    var index=url.last
}

var baseUrl='http://www.quanjing.com';
downLoad(baseUrl,function(data){
    if(data){
        var $=cheerio.load(data);
        $(".tabCon img").each(function(index,item){
            var fileurl='';
            if($(item).attr('src').indexOf('/')===0){
                fileurl=baseUrl+$(item).attr('src')
            }else{
                fileurl=baseUrl+'/'+$(item).attr('src')
            }
            console.log(fileurl)
        })
    }
})