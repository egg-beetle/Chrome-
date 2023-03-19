console.log("from background.js");
chrome.contextMenus.create(
  
  {type:"normal",
   title:"鼠标右键、选中出现的标题“,
   contexts:["selection","link"],
   onclick:function(info)
	   {console.log(info)}
  },
  function(){})

  
chrome.contextMenus.create(
  
  {type:"checkbox",
   title:"checkbox标题”，
   contexts:["selection","link"],
   onclick:function(info)
	   {consle.log(info)}
  },
  function(){})
