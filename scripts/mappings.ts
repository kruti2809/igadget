/*
  NEW Mappings

  PLEASE SEE: page_type.ts to define the $page_type variable first!

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($path) {
  log("Path = " + $path)
 with((/^\/$|^\/\?/)) {
      log("--> Importing pages/home.ts in mappings.ts")
      @import pages/home.ts
    }
    with(/shop/){
      log("--> Importing pages/category.ts in mappings.ts")
      @import pages/category.ts
    }
    with(/sample-product/){
      log("--> Importing pages/product.ts in mappings.ts")
      @import pages/product.ts
    }
    with(/cart/){
      log("--> Importing pages/cart.ts in mappings.ts")
      @import pages/cart.ts
    }
    with(/login/){
      log("--> Importing pages/user.ts in mappings.ts")
      @import pages/user.ts
    }
     with(/search/){
      log("--> Importing pages/search.ts in mappings.ts")
      @import pages/search.ts
    }
  else() {
    log("--> No page match in mappings.ts")
  }
}