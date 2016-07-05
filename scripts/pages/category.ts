$("//body") {
	log("inside category######################################")
  add_class("mw_category")
   $("./div[@id='Container']/div[@id='AjaxLoading']"){
    remove()
  }
  $("./div[@id='Container']/div[@id='Outer']") {
    $("./div[@id='Wrapper']") {
 
      $("./div[@class='Left']") {
        # Create Togglers
        $("./div[@id='SideShopByBrand' or @id='SideCategoryShopByPrice']") {
          attribute("data-ur-set", "toggler")
          $("./h2") {
            attribute("data-ur-toggler-component", "button")
            insert("div", class: "mw_indicator")
          }
          $("./div") {
            attribute("data-ur-toggler-component", "content")
            $(".//li/a") {
              insert("div", class: "mw_arrow")
            }
          }
        }
   
        $(".//div[contains(@class, 'NewsletterSubscription')]") {
          remove()
        }
        
      }
   
      $("./div[@class='Content ']"){
        $("./div[@id='CategoryHeading']"){
          $("./div[@class='BlockContent']") {
            $("./h2") {
              move_to("../../../../div[@class='Left']", "top")
            }
            $("./div[@class='FloatRight SortBox']") {
              $("./form") {
                wrap_text_children("span")
                $("./select"){
                  $var1=fetch("//div[@class='Content ']/div[@id='CategoryHeading']/div[@class='BlockContent']/div[@class='FloatRight SortBox']/form/span")
                  attribute("style","border:1px red solid")
                }
              }
            }
          }
        }
        $("//div[@id='CategoryBreadcrumb']"){
          remove()
        }
        $("./div[@id='CategoryContent']"){
           $("./form/ul/li/div[@class='ProductActionAdd']/a"){
            add_class("sprites-AddCartButton")
          }
          $("//form/ul/li/div[@class='ProductCompareButton']"){
          remove()
          }
          $("//form/div[@class='CompareButton']"){
            remove()
          }
        }  
      }
      $("./div[@class='Right']"){
          remove()
        }
      }

    }
  }

     