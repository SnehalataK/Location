
import {Locations, changeState, addOptions} from './location.js'

(function(window,$){
  let _init = (param)=> {
    Locations.fetch_data(param.url)
    .then( _json => {
        addOptions(_json,param.container,$);
        changeState(param.container,$);
    })
    .catch(()=>{console.log('Error')});
  }
  window.Locations = {
    init:_init
  }
}(window, jQuery))


