$('./body') {
   insert_top("header", class: "mw-header") {
     $("//div[@id='Header']"){
     attribute("data-ur-set", "toggler")
     	$("./div[@id='Logo']"){
 			  move_here("../../../div[@id='TopMenu']", "bottom") {
    		 remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
          
          $("//div[@id='TopMenu']/ul"){
            remove("label")
            $("./li[1]/a"){
             add_class("sprites-user")
             attribute("data-ur-set","toggler")
            }
            $("./li[2]/a"){
             add_class("sprites-cart")
            }
          }
  			}
     	}

      insert("div", class: "mw_header_bottom"){
        insert("div", class: "mw_search")
        insert("div", class: "mw_menu_btn sprites-menu", data-ur-toggler-component: "button")
      }

      $("..//div[@class='mw_search']"){
      move_here("//div[@id='SearchForm']","bottom"){
          remove("./p")

          $("./form"){

            remove("./label")

            $("./input[@type='image']") {
              add_class("mw-hide")
              wrap("div", class: "mw_search_btn sprites-search")
            }

            $("./input[@type='text']"){
              attribute("placeholder","Search..")
            }

          }
        }
      }

      move_here("../div[@id='Menu']", "bottom") {
      attribute("data-ur-toggler-component", "content")
      move_here("../../div[@id='Wrapper']/div[@class='Left']/div[@id='SideCategoryList']", "bottom")
      add_class("mw_animated")
      $$("li") {
      add_class("mw_bar2")
      }
    }

    }
  }
}
