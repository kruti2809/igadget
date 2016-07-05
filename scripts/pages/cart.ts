$("./body"){
	log("inside cart page ###############")
	add_class("mw-cart")
	$("./div[@id='Container']/div[@id='AjaxLoading']"){
		remove()
	}
	$("./div[@id='Container']/div[@id='Outer']/div[@id='Wrapper']"){
		$("./div[@class='Left']"){
			move_to("//div[@class='Content']","bottom")
		}
		$("./div[@class='Content']"){
			$("./div[@id='CartBreadcrumb']"){
				remove()
			}
			$("./div[@class='Block Moveable Panel']"){
				$("./div[@class='BlockContent']"){
					$("./div/form/table/thead/tr"){
					}
				}
			}
		}
		$("./div[@class='Right']"){
			remove()
		}
	}
}