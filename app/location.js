
export var Locations = {
    fetch_data : (url='') => {
        return new Promise(
            function (resolve, reject) {
                fetch(url)
                .then(response => resolve(response.json()))
                .catch(function() {
                    reject('Error in fetching data');
                })
            }
        );
    }
};

export var changeState = function(container,$) {
    var SelectState = $('.'+container);    
    SelectState.on('change', function () { 
        var myId = $(this).find(':selected').attr('id');
        $('.option select').filter('.' + myId).fadeIn(1).siblings('select').hide();
    });
};

export var addOptions = function (_json,container,$){
    for (var i = 0; i < _json.length; i++)  {
        $('<option>', {value: _json[i].State_Name, text: _json[i].State_Name, id: _json[i].State_Name})
        .appendTo("."+container);
        $('<select>',{class:_json[i].State_Name}).appendTo(".option");  
        var disrticts = _json[i].Disrticts;
        for (var j = 0; j < disrticts.length; j+= 1) {      
            $('<option>', {value: disrticts[j], text: disrticts[j], id: disrticts[j]})
                .appendTo("."+_json[i].State_Name);
        }           
    }
      
    $('.option select').hide();  
    $('.'+_json[0].State_Name).show().css('display', 'inline-block');
}