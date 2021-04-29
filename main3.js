function Search(text) {
    $(".keyword-list").each(function(index,element){               //.eachで全てのkeyword_listクラスを処理
        let keyword = $(element).text();　　　　　　　　　　　　　//<p>タグに囲まれた文字列を取得、変数に一旦格納
        if(keyword.indexOf(text)===-1){　　　　　　　　　　　　　//検索後がキーワードとマッチしない時、マッチしていない画像を非表示
            $(element).parent().css("display","none");　　　　　//elementだと文字だけ消えるので親要素取得
        }else{
            $(element).parent().css("display","block");
        }
    });
};

$(function(){
    $(".input-text").on("input",function(event){　　　　　　　　//キーワードが入力された時に処理
        let text = $(".input-text").val();　　　　　　　　　　　//入力された文字をval()で受け取る
        if(text === ""){　　　　　　　　　　　　　　　　　　　　//入力がない時は全ての画像表示
            $(".imagebox").css("display","block");
        }else{
            Search(text);
        }
    });
});
  
  
  
  
  
  