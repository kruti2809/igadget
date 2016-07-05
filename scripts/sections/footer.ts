$("./body") {
  log("inside @@@@@@@@@@@@@")
  	$("./div[@id='Footer']"){
  		insert("footer", "Powered by Moovweb", class: "mw-footer")
  		$("./p/a/span"){
  			remove()
  		}
  		$("./p/a[2]"){
  			remove()
  		}
  	}
  }

