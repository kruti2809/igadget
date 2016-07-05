$("./body"){
	log("inside home################")
	add_class("mw-home")
	$("./div[@id='Container']/div[@id='AjaxLoading']"){
		remove()
	}
	$("//div[@id='Wrapper']/div[@class='Left']/div[@id='SideShopByBrand']"){
		remove()
	}
	$("//div[@id='Wrapper']/div[@class='Left']/div[@id='SideNewsletterBox']"){
		remove()
	}
	$("//div[@id='Wrapper']/div[@class='Right']"){
		remove()
	}
	$("//div[@id='Wrapper']/div[@class='Content']/div[@id='HomeFeaturedProducts']/h2/span"){
		remove()
	}
	$("//div[@id='Wrapper']/div[@class='Content']/div[@id='HomeNewProducts']/h2/span"){
		remove()
	}


	$("//div[@id='Container']/div[@id='Outer']/div[@id='Wrapper']/div[@class='Content']/div[@id='HomeFeaturedProducts']"){
		$("./div[@class='BlockContent']"){
			attribute("data-ur-set","carousel")
			attribute("data-ur-infinite","enabled")
				$("//ul"){
				attribute("data-ur-carousel-component","scroll_container")
					$("//li"){
						attribute("data-ur-carousel-component","item")
					}
			}
	insert("div", style:"padding:32px;margin:0px" , data-ur-carousel-component:"dots")
		}	
	}
	$("//div[@id='Container']/div[@id='Outer']/div[@id='Wrapper']/div[@class='Content']/div[@id='HomeNewProducts']"){
		$("./div[@class='BlockContent']"){
			attribute("data-ur-set","carousel")
			attribute("data-ur-infinite","enabled")
				$("//ul"){
				attribute("data-ur-carousel-component","scroll_container")
					$("//li"){
						attribute("data-ur-carousel-component","item")
					}
			}
	insert("div", style:"padding:32px;margin:0px" , data-ur-carousel-component:"dots")
		}
	}
}
