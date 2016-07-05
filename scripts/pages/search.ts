$("./body"){
	log("inside search page ############")
	add_class("mw-search")
	$("./div[@id='Container']"){
		$("./div[@id='AjaxLoading']"){
			remove()
		}
		$("./div[@id='Outer']"){
			$("./div[@id='Wrapper']"){
				$("./div[@class='Left']"){
					remove()
				}
			$("./div[@id='LayoutColumn2']"){
				$("./div[@id='SearchPageHeader']"){
					$("./div[@class='FloatRight ToggleSearchFormLink']"){
						remove()
						}
					}
				}
			}
		}
	}
}