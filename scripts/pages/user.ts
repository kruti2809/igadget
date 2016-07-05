$("./body"){
	log("inside user#################")
	add_class("mw-user")
	$("./div[@id='Container']/div[@id='AjaxLoading']"){
		remove()
	}
	$("./div[@id='Container']/div[@id='Outer']/div[@id='Wrapper']"){
		$("./div[@class='Left']"){
			$("./div[@id='SideNewProducts']"){
				remove()
			}
			$("./div[@id='SideNewsletterBox']"){
				remove()
			}
		}
		$("./div[@class='Content Wide WideWithLeft']"){
			$("./div[@id='LoginBreadcrumb']"){
					remove()
			}
			$("./div[@id='LoginForm']/div[@class='BlockContent']"){
				$("./div[@class='CreateAccount']/div[2]/a"){
					move_to("//div[@class='AccountLogin']","bottom")
				}
				$("./div[@class='CreateAccount']"){
					remove()
				}
				$("./div[@class='AccountLogin']"){
					
				}
			}

		}
	}
}