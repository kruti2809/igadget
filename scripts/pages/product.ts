$("//body"){
	log("inside product###################")
	add_class("mw_zproduct")
	$("./div[@id='Container']/div[@id='AjaxLoading']"){
		remove()
	}
	$("./div[@id='Container']/div[@id='Outer']/div[@id='Wrapper']"){
		$("./div[@class='Left']"){
			remove()
		}

		$("./div[@class='Content']"){
			$("./div[@id='ProductBreadcrumb']"){
			remove()
			}
			$("./div[@id='ProductDetails']"){
				$("./div[@class='BlockContent']"){
					$("./div[@class='Clear AddThisButtonBox']"){
						remove()
					}
				$("./div[@class='ProductThumb']"){
					$("./div[@class='ImageCarouselBox']"){
						$("./a[@id='ImageScrollNext']"){
							remove()
							}
						}
					}
				$("./div[@class='ProductMain']"){
					$("./div[@class='ProductDetailsGrid']"){

						}
					}
				}
			}
			$("./div[@id='ProductReviews']/a"){
				remove()
			}
			$("./div[@id='SimilarProductsByCustomerViews']"){
				remove()
			}
		}
			$("./div[@class='Right']"){
				$("./div[@id='SideProductRelated']"){
					remove()
				}
				$("./div[@id='SideProductRecentlyViewed']/div[@class='BlockContent']/form/ul/li/div[@class='ComparisonCheckbox']"){
					remove()
				}
			}
	}
}