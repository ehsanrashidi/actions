const a0_0x1f36e3=a0_0x3f28;function a0_0x587f(){const _0x5c1532=['push','dFlKQ','ypUxr','uOnTZ','7449svxKmM','rhDni','ht:news_item_source','djCSY','JBcnO','apply','ieemM','input','counter','ht:news_item_url','12TYqNqU','forEach','mMBlg','action','items','xstoR','./services/trends-service','LXbEQ','DcQPL','ht:picture','link','kOTJD','3971XpKQUB','gger','function\x20*\x5c(\x20*\x5c)','2772000KmScmw','38150beRFZR','vpnzW','xVlOU','35SJoJto','rss-parser','rJPIw','IXYyv','lwGSm','AFYzK','754612uLvFfg','findAll','debu','add','then','parseURL','kWVuq','findIndex','BddHd','1UJlTjH','VWjyP','ZbklE','1018856HLZvzi','OLJxE','news_list','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','GSSFM','mxBWa','string','hNsVS','constructor','CXCRA','2408445BuaSdv','ht:approx_traffic','ht:news_item_title','ht:news_item_picture','TJrBA','./services/suggest-service','chain','HFndN','RsoGc','TtvFN','KacnT','ht:news_item','97780YBarxX','LPoUK','YokNP','call','xUrUP','15hiIGhK','xflQu','https://trends.google.com/trending/rss','22476znbzGL','log','while\x20(true)\x20{}','ifADC','ht:picture_source','pubDate','PQhuh','lVpHF','catch','yCjNC','title','rwiZt','&cat=','map'];a0_0x587f=function(){return _0x5c1532;};return a0_0x587f();}(function(_0x791d30,_0x7ca662){const _0x1a173e=a0_0x3f28,_0x227d53=_0x791d30();while(!![]){try{const _0x8fec54=parseInt(_0x1a173e(0x1ef))/0x1*(parseInt(_0x1a173e(0x1a9))/0x2)+-parseInt(_0x1a173e(0x1ae))/0x3*(parseInt(_0x1a173e(0x1e6))/0x4)+parseInt(_0x1a173e(0x1fc))/0x5*(parseInt(_0x1a173e(0x1cd))/0x6)+parseInt(_0x1a173e(0x1e0))/0x7*(parseInt(_0x1a173e(0x1f2))/0x8)+parseInt(_0x1a173e(0x1dc))/0x9+parseInt(_0x1a173e(0x1dd))/0xa*(-parseInt(_0x1a173e(0x1d9))/0xb)+parseInt(_0x1a173e(0x1b1))/0xc*(parseInt(_0x1a173e(0x1c3))/0xd);if(_0x8fec54===_0x7ca662)break;else _0x227d53['push'](_0x227d53['shift']());}catch(_0x4cffa3){_0x227d53['push'](_0x227d53['shift']());}}}(a0_0x587f,0xad4aa));const a0_0x1513d8=(function(){let _0x3cfdb9=!![];return function(_0x2d1226,_0x38002b){const _0x48c241=_0x3cfdb9?function(){const _0x3db466=a0_0x3f28;if(_0x38002b){const _0x229853=_0x38002b[_0x3db466(0x1c8)](_0x2d1226,arguments);return _0x38002b=null,_0x229853;}}:function(){};return _0x3cfdb9=![],_0x48c241;};}());(function(){const _0x364f24=a0_0x3f28,_0x5239a7={'xVlOU':_0x364f24(0x1db),'vpnzW':_0x364f24(0x1f5),'ypUxr':'init','mxBWa':function(_0x5991dd,_0x4d971b){return _0x5991dd+_0x4d971b;},'HFndN':_0x364f24(0x202),'dgjLb':_0x364f24(0x1ca),'HvpfJ':function(_0x28355e,_0x24dc6d){return _0x28355e(_0x24dc6d);},'LXbEQ':function(_0x5bf6c4){return _0x5bf6c4();},'hNsVS':function(_0x14e743,_0x1ee557,_0x11e8f1){return _0x14e743(_0x1ee557,_0x11e8f1);}};_0x5239a7[_0x364f24(0x1f9)](a0_0x1513d8,this,function(){const _0x34c669=_0x364f24,_0x20d8df=new RegExp(_0x5239a7[_0x34c669(0x1df)]),_0x2e177e=new RegExp(_0x5239a7[_0x34c669(0x1de)],'i'),_0x1bf6c9=a0_0xa198b9(_0x5239a7[_0x34c669(0x1c1)]);!_0x20d8df['test'](_0x5239a7[_0x34c669(0x1f7)](_0x1bf6c9,_0x5239a7[_0x34c669(0x1a4)]))||!_0x2e177e['test'](_0x1bf6c9+_0x5239a7['dgjLb'])?_0x5239a7['HvpfJ'](_0x1bf6c9,'0'):_0x5239a7[_0x34c669(0x1d4)](a0_0xa198b9);})();}());const fs=require('fs'),Parser=require(a0_0x1f36e3(0x1e1)),SuggestService=require(a0_0x1f36e3(0x201)),TrendsService=require(a0_0x1f36e3(0x1d3)),BASE_URL=a0_0x1f36e3(0x1b0),LNG='fa',GEO='IR',CAT_ID=0xae,URL=BASE_URL+'?geo='+GEO+'&hl='+LNG+a0_0x1f36e3(0x1bd)+CAT_ID,filePath='trends.json',parser=new Parser({'customFields':{'item':[a0_0x1f36e3(0x1fd),a0_0x1f36e3(0x1d6),'ht:picture_source','ht:news_item']}}),trendsService=new TrendsService(),ROWS=[],parse_feed=_0x2eb178=>{const _0x357d25=a0_0x1f36e3,_0x43c824={'BddHd':_0x357d25(0x1fd),'OLJxE':'ht:picture','JBcnO':_0x357d25(0x1b5),'KacnT':function(_0x144122,_0x5c9d35){return _0x144122===_0x5c9d35;},'PQhuh':_0x357d25(0x1ba),'QSYBO':_0x357d25(0x1fe),'xZPgP':'ht:news_item_url','kOTJD':_0x357d25(0x1ff),'yNeXK':'ht:news_item_source'},_0x6f6ba2={'title':_0x2eb178[_0x357d25(0x1bb)],'link':_0x2eb178[_0x357d25(0x1d7)],'pubDate':_0x2eb178['pubDate'],'traffic':_0x2eb178[_0x43c824[_0x357d25(0x1ee)]],'picture':_0x2eb178[_0x43c824[_0x357d25(0x1f3)]],'pictureSource':_0x2eb178[_0x43c824[_0x357d25(0x1c7)]],'news_list':[]},_0x5ce8d6=_0x2eb178[_0x357d25(0x1a8)];if(!_0x5ce8d6)return _0x6f6ba2;return Array['isArray'](_0x5ce8d6)?_0x5ce8d6[_0x357d25(0x1ce)](_0xe9dda=>{const _0x53955b=_0x357d25;_0x6f6ba2[_0x53955b(0x1f4)][_0x53955b(0x1bf)]({'title':_0xe9dda[_0x53955b(0x1fe)],'url':_0xe9dda[_0x53955b(0x1cc)],'picture':_0xe9dda['ht:news_item_picture'],'source':_0xe9dda[_0x53955b(0x1c5)]});}):_0x43c824[_0x357d25(0x1a7)](_0x43c824['PQhuh'],_0x43c824[_0x357d25(0x1b7)])?_0x6f6ba2[_0x357d25(0x1f4)][_0x357d25(0x1bf)]({'title':_0x5ce8d6[_0x43c824['QSYBO']],'url':_0x5ce8d6[_0x43c824['xZPgP']],'picture':_0x5ce8d6[_0x43c824[_0x357d25(0x1d8)]],'source':_0x5ce8d6[_0x43c824['yNeXK']]}):_0x516b89(),_0x6f6ba2;},updateTrendsFile=async _0x562f03=>{const _0x2870cc=a0_0x1f36e3,_0x1b97ee={'IXYyv':function(_0x27735b,_0x30fc6c){return _0x27735b!==_0x30fc6c;},'VWjyP':_0x2870cc(0x1d5),'CiGht':'finished'};let _0x5247a=[];_0x5247a=await trendsService[_0x2870cc(0x1e7)](),_0x562f03['forEach'](_0xbddebb=>{const _0x5957f0=_0x2870cc,_0x314589=_0x5247a[_0x5957f0(0x1ed)](_0x48885e=>_0x48885e['title']===_0xbddebb[_0x5957f0(0x1bb)]);if(_0x1b97ee[_0x5957f0(0x1e3)](_0x314589,-0x1)){if(_0x1b97ee[_0x5957f0(0x1e3)]('sCqvZ',_0x1b97ee[_0x5957f0(0x1f0)]))_0x5247a[_0x314589]=_0xbddebb;else{const _0x269fc4=_0x2fa601[_0x5957f0(0x1c8)](_0x45c34d,arguments);return _0xddd592=null,_0x269fc4;}}else _0x5247a['push'](_0xbddebb);});var _0x337e9d=_0x5247a[_0x2870cc(0x1be)](_0x13d55a=>trendsService[_0x2870cc(0x1e9)](_0x13d55a));Promise['all'](_0x337e9d)[_0x2870cc(0x1ea)](_0x461068=>{})[_0x2870cc(0x1b9)](console[_0x2870cc(0x1b2)])['finally'](_0x1b97ee['CiGht']);};parser[a0_0x1f36e3(0x1eb)](URL,(_0x145dee,_0xaba409)=>{const _0x546449=a0_0x1f36e3,_0x5c51bb={'CXCRA':function(_0x3b2f62,_0x9cfbd9){return _0x3b2f62(_0x9cfbd9);},'rwiZt':function(_0x26d694,_0x2c3471){return _0x26d694===_0x2c3471;},'YokNP':'wTqPh','dFlKQ':'pCHOr','ifADC':function(_0x5deda8,_0x226467){return _0x5deda8(_0x226467);}};if(_0x145dee){if(_0x5c51bb[_0x546449(0x1bc)](_0x5c51bb[_0x546449(0x1ab)],_0x5c51bb[_0x546449(0x1c0)])){if(_0x3edffd)return _0x4af8a8;else mVMLxy[_0x546449(0x1fb)](_0x5e9f8e,0x0);}else{console['error'](_0x145dee);return;}}_0xaba409[_0x546449(0x1d1)][_0x546449(0x1ce)](_0x3617d6=>ROWS[_0x546449(0x1bf)](parse_feed(_0x3617d6))),_0x5c51bb[_0x546449(0x1b4)](updateTrendsFile,ROWS);});function a0_0x3f28(_0x4efca3,_0x53c1be){const _0x5c7e0d=a0_0x587f();return a0_0x3f28=function(_0xa198b9,_0x1513d8){_0xa198b9=_0xa198b9-0x1a4;let _0x587f1e=_0x5c7e0d[_0xa198b9];return _0x587f1e;},a0_0x3f28(_0x4efca3,_0x53c1be);}function a0_0xa198b9(_0x4dfdb9){const _0x3f2c59=a0_0x1f36e3,_0x47386a={'LPoUK':_0x3f2c59(0x1cb),'wraNG':function(_0x500c17,_0xaa141a){return _0x500c17!==_0xaa141a;},'ieemM':function(_0x10d20c,_0x252989){return _0x10d20c+_0x252989;},'JHWoJ':'length','ILBDY':function(_0x14369a,_0x425b0a){return _0x14369a===_0x425b0a;},'xflQu':function(_0x4e3c16,_0x313c2a){return _0x4e3c16%_0x313c2a;},'RsoGc':function(_0x462742,_0x104277){return _0x462742+_0x104277;},'ZbklE':_0x3f2c59(0x1e8),'TtvFN':_0x3f2c59(0x1da),'WLjBE':_0x3f2c59(0x1d0),'XfjeQ':'stateObject','xUrUP':function(_0x3ee193,_0x407702){return _0x3ee193(_0x407702);},'lVpHF':_0x3f2c59(0x1fe),'rhDni':_0x3f2c59(0x1cc),'djCSY':'ht:approx_traffic','htiSC':_0x3f2c59(0x1b5),'AqOic':'ht:news_item_picture','mMBlg':'ht:news_item_source','rJPIw':function(_0x174bb7,_0x5f5c2a){return _0x174bb7!==_0x5f5c2a;},'nwHpn':_0x3f2c59(0x1c2),'lwGSm':function(_0x533502,_0x2227d2){return _0x533502===_0x2227d2;},'GSSFM':_0x3f2c59(0x1e5)};function _0x6a4aca(_0x206942){const _0x56b304=_0x3f2c59;if(typeof _0x206942===_0x56b304(0x1f8))return function(_0x551550){}[_0x56b304(0x1fa)](_0x56b304(0x1b3))[_0x56b304(0x1c8)](_0x47386a[_0x56b304(0x1aa)]);else _0x47386a['wraNG'](_0x47386a[_0x56b304(0x1c9)]('',_0x206942/_0x206942)[_0x47386a['JHWoJ']],0x1)||_0x47386a['ILBDY'](_0x47386a[_0x56b304(0x1af)](_0x206942,0x14),0x0)?function(){return!![];}[_0x56b304(0x1fa)](_0x47386a[_0x56b304(0x1a5)](_0x47386a[_0x56b304(0x1f1)],_0x47386a[_0x56b304(0x1a6)]))[_0x56b304(0x1ac)](_0x47386a['WLjBE']):function(){return![];}['constructor'](_0x47386a[_0x56b304(0x1f1)]+_0x47386a['TtvFN'])[_0x56b304(0x1c8)](_0x47386a['XfjeQ']);_0x47386a[_0x56b304(0x1ad)](_0x6a4aca,++_0x206942);}try{if(_0x47386a[_0x3f2c59(0x1e2)](_0x3f2c59(0x1c2),_0x47386a['nwHpn'])){const _0x1e7c88={'xstoR':_0x47386a['lVpHF'],'TJrBA':_0x47386a[_0x3f2c59(0x1c4)],'kWVuq':'ht:news_item_source'},_0x204e1e={'title':_0x35c338[_0x3f2c59(0x1bb)],'link':_0xaa21a8['link'],'pubDate':_0x3b2362[_0x3f2c59(0x1b6)],'traffic':_0x3d11f8[_0x47386a[_0x3f2c59(0x1c6)]],'picture':_0x2cbd5a['ht:picture'],'pictureSource':_0x6dc6d5[_0x47386a['htiSC']],'news_list':[]},_0x429378=_0x514ccb[_0x3f2c59(0x1a8)];if(!_0x429378)return _0x204e1e;return _0x5ae3eb['isArray'](_0x429378)?_0x429378[_0x3f2c59(0x1ce)](_0xd6dc8d=>{const _0x53ef82=_0x3f2c59;_0x204e1e['news_list'][_0x53ef82(0x1bf)]({'title':_0xd6dc8d[_0x1e7c88[_0x53ef82(0x1d2)]],'url':_0xd6dc8d[_0x1e7c88[_0x53ef82(0x200)]],'picture':_0xd6dc8d[_0x53ef82(0x1ff)],'source':_0xd6dc8d[_0x1e7c88[_0x53ef82(0x1ec)]]});}):_0x204e1e['news_list'][_0x3f2c59(0x1bf)]({'title':_0x429378[_0x47386a[_0x3f2c59(0x1b8)]],'url':_0x429378[_0x47386a[_0x3f2c59(0x1c4)]],'picture':_0x429378[_0x47386a['AqOic']],'source':_0x429378[_0x47386a[_0x3f2c59(0x1cf)]]}),_0x204e1e;}else{if(_0x4dfdb9)return _0x6a4aca;else _0x47386a[_0x3f2c59(0x1e4)](_0x47386a[_0x3f2c59(0x1f6)],_0x47386a[_0x3f2c59(0x1f6)])?_0x47386a[_0x3f2c59(0x1ad)](_0x6a4aca,0x0):_0x5917fd['push'](_0x1568f0);}}catch(_0x36ae75){}}